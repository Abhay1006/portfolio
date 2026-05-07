import React from 'react'
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GithubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import { Container, Typography, Box, Button, Stack, Chip } from '@mui/material';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];

    if (!project) return <Typography variant="h5">Project not found</Typography>;

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#3e497a' }}>
                    {project.name}
                </Typography>
                <Box 
                    component="img" 
                    src={`/${project.image}`} 
                    alt={project.name} 
                    sx={{ 
                        width: '100%', 
                        maxWidth: 600, 
                        borderRadius: 2, 
                        boxShadow: 3,
                        mb: 4 
                    }} 
                />
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                        Skills
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
                        {project.skills.split(',').map((skill, index) => (
                            <Chip key={index} label={skill.trim()} color="primary" variant="outlined" />
                        ))}
                    </Stack>
                </Box>
                <Stack direction="row" spacing={3}>
                    <Button 
                        variant="contained" 
                        startIcon={<GithubIcon />} 
                        href={project.github} 
                        target="_blank"
                        sx={{ backgroundColor: '#3e497a' }}
                    >
                        View Repository
                    </Button>
                    {project.hosted && (
                        <Button 
                            variant="outlined" 
                            startIcon={<LaunchIcon />} 
                            href={project.hosted} 
                            target="_blank"
                        >
                            Live Demo
                        </Button>
                    )}
                </Stack>
            </Box>
        </Container>
    )
}

export default ProjectDisplay
