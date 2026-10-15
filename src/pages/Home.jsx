import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";
import { Container, Typography, Box, IconButton, Paper, Grid, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Link as RouterLink } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { projectList } from '../helpers/ProjectList';
import usePageTitle from '../helpers/usePageTitle';

const FEATURED_COUNT = 3;

function Home() {
  usePageTitle();

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
            Software developer and Head of DSA at CodeChef. I build full-stack web apps, macOS tools and terminal apps.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 6 }}>
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
              href="https://blog.oniichad.com" 
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
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 8 }}>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {[
            { 
              title: "Front-End", 
              skills: "React.js, Next.js, HTML, CSS, Bootstrap, Tailwind CSS",
              color: "#e3f2fd",
              darkColor: "#1a2733"
            },
            { 
              title: "Back-End", 
              skills: "Node.js, Express.js, NestJS, MySQL, PostgreSQL, MongoDB, Prisma, Docker",
              color: "#f3e5f5",
              darkColor: "#2a1f2d"
            },
            { 
              title: "Languages", 
              skills: "C, C++, Python, JavaScript, Java, Go",
              color: "#e8f5e9",
              darkColor: "#1c2a1e"
            }
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  textAlign: 'center',
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? item.darkColor : item.color,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)' }
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
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

      {/* Featured Projects */}
      <Box sx={{ py: 10, backgroundColor: 'background.section' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 8 }}>
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {projectList.slice(0, FEATURED_COUNT).map((project, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectItem id={idx} name={project.name} image={project.image} description={project.description} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button component={RouterLink} to="/projects" variant="outlined" size="large" sx={{ borderRadius: '25px', px: 4 }}>
              View all projects
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
