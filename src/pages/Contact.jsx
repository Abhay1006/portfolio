import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { Container, Typography, TextField, Button, Box, Alert, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import usePageTitle from '../helpers/usePageTitle';

// Netlify Forms picks up submissions to "/" for the static "contact" form in public/index.html
const submitContactForm = async (values) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': 'contact', ...values }).toString(),
  });
  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
};

function Contact() {
  usePageTitle('Contact');
  const mutation = useMutation({
    mutationFn: submitContactForm,
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().min(10, 'Must be at least 10 characters').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values, { onSuccess: () => resetForm() });
    },
  });

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Have a question or want to work together? Fill out the form below!
      </Typography>

      {mutation.isSuccess && (
        <Alert severity="success" sx={{ mb: 4 }}>
          Your message has been sent successfully!
        </Alert>
      )}

      {mutation.isError && (
        <Alert severity="error" sx={{ mb: 4 }}>
          Something went wrong. Please try again.
        </Alert>
      )}

      <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          size="large"
          disabled={mutation.isPending}
          startIcon={mutation.isPending ? <CircularProgress size={20} /> : <SendIcon />}
          sx={{ py: 1.5 }}
        >
          {mutation.isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
