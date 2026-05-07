import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%',
        margin: 'auto',
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
        }
      }}
    >
      <CardActionArea onClick={() => navigate("/project/" + id)} sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="200"
          image={`/${image}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" sx={{ fontWeight: 'bold', color: '#3e497a' }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectItem;
