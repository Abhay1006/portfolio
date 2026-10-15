import React from 'react'
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GithubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import { Container, Typography, Box, Button, Stack, Chip } from '@mui/material';
import usePageTitle from '../helpers/usePageTitle';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    usePageTitle(project ? project.name : 'Project not found');

    if (!project) return <Typography variant="h5">Project not found</Typography>;

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
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
                {project.description && (
                    <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {project.description}
                    </Typography>
                )}
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
