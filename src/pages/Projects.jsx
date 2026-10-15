import React from 'react'
import ProjectItem from './ProjectItem'
import { projectList } from '../helpers/ProjectList.js'
import { Container, Typography, Grid, Box } from '@mui/material'
import usePageTitle from '../helpers/usePageTitle'

function Projects() {
  usePageTitle('Projects')

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.section', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: 'primary.main',
            mb: 6 
          }}
        >
          My Personal Projects
        </Typography>
        <Grid container spacing={4}>
          {projectList.map((project, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectItem id={idx} name={project.name} image={project.image} description={project.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects
