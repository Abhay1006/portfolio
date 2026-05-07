import React from 'react'
import ProjectItem from './ProjectItem'
import { projectList } from '../helpers/ProjectList.js'
import { Container, Typography, Grid, Box } from '@mui/material'

function Projects() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: '#3e497a',
            mb: 6 
          }}
        >
          My Personal Projects
        </Typography>
        <Grid container spacing={4}>
          {projectList.map((project, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <ProjectItem id={idx} name={project.name} image={project.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects
