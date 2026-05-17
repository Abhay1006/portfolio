import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import { Container, Typography, Box, IconButton, Paper, Grid, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundColor: '#3e497a', 
          color: 'white', 
          py: { xs: 10, md: 15 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' }, mb: 2 }}>
            Hi, My name is Abhay
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            A software developer with a passion for learning and problem solving.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
            <IconButton 
              href="https://www.linkedin.com/in/abhay-pratap-singh1006/" 
              target="_blank" 
              sx={{ color: 'white' }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href="mailto:abhaypratapsingh1006@gmail.com" 
              sx={{ color: 'white' }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href="https://github.com/Abhay1006" 
              target="_blank" 
              sx={{ color: 'white' }}
            >
              <GithubIcon fontSize="large" />
            </IconButton>
            <IconButton 
              href="https://blogs.oniichad.com" 
              target="_blank" 
              sx={{ color: 'white' }}
            >
              <BookIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<DownloadIcon />}
            href="/Abhay Pratap Singh.pdf"
            download
            sx={{ 
              borderRadius: '25px', 
              px: 4, 
              backgroundColor: '#f0f0f0', 
              color: '#3e497a',
              '&:hover': { backgroundColor: 'white' }
            }}
          >
            Download Resume
          </Button>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#3e497a', mb: 8 }}>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {[
            { 
              title: "Front-End", 
              skills: "ReactJs, HTML, CSS, BootStrap, NestJs, TailwindCss",
              color: "#e3f2fd"
            },
            { 
              title: "Back-End", 
              skills: "NodeJs, MySQL, Postgres, ExpressJs, NextJS, Docker, MongoDB, Prisma",
              color: "#f3e5f5"
            },
            { 
              title: "Languages", 
              skills: "C, C++, Python, JavaScript, Java, GOLANG",
              color: "#e8f5e9"
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  textAlign: 'center',
                  backgroundColor: item.color,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3e497a' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.skills}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
