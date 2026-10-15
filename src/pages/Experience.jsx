import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import { EmojiEvents } from '@mui/icons-material';
import { Container, Typography, Box, useTheme } from '@mui/material';
import usePageTitle from '../helpers/usePageTitle';

function Experience() {
  usePageTitle('Experience');
  const theme = useTheme();
  const cardStyle = (accent) => ({
    borderTop: `3px solid ${accent}`,
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  });
  const arrowStyle = { borderRight: `7px solid ${theme.palette.background.paper}` };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.section' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}
        >
          My Experience
        </Typography>
        <VerticalTimeline lineColor={theme.palette.primary.main}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
            contentStyle={cardStyle("#3e497a")}
            contentArrowStyle={arrowStyle}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              Nehru World School
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
              Shastri Nagar, Ghaziabad, Uttar Pradesh
            </Typography>
            <Typography variant="body2">Class 12th CBSE</Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
            contentStyle={cardStyle("#3e497a")}
            contentArrowStyle={arrowStyle}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              Ajay Kumar Garg Engineering College
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
              Ghaziabad, Uttar Pradesh
            </Typography>
            <Typography variant="body2">
              Computer Science Engineering (Artificial Intelligence and Machine Learning)
            </Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<EmojiEvents />}
            contentStyle={cardStyle("#e9d35b")}
            contentArrowStyle={arrowStyle}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              Geekathon 1.0 by VIT-AP
            </Typography>
            <Typography variant="body2">
              Advanced to the final round of the hackathon
            </Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2025 - Present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={cardStyle("#3e497a")}
            contentArrowStyle={arrowStyle}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              CodeChef
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
              Head of DSA
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
              Content Team Head, North Region
            </Typography>
            <Typography variant="body2">
              Started DSA Mondays on CodeChef.
            </Typography>
            <Typography variant="body2">
              Previously SDET and Learning Content Associate, working on Node.js DSA questions, Flask, and educational content.
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Box>
  )
}

export default Experience
