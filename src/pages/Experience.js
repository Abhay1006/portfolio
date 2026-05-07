import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import { EmojiEvents } from '@mui/icons-material';
import { Container, Typography, Box } from '@mui/material';

function Experience() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#3e497a', mb: 6 }}
        >
          My Experience
        </Typography>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
            contentStyle={{ borderTop: '3px solid #3e497a', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              Nehru World School
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#3e497a' }}>
              Shastri Nagar, Ghaziabad, Uttar Pradesh
            </Typography>
            <Typography variant="body2">Class 12th CBSE</Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
            contentStyle={{ borderTop: '3px solid #3e497a', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              Ajay Kumar Garg Engineering College
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#3e497a' }}>
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
            contentStyle={{ borderTop: '3px solid #e9d35b', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}
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
            contentStyle={{ borderTop: '3px solid #3e497a', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}
          >
            <Typography variant="h6" className="vertical-timeline-element-title" sx={{ fontWeight: 'bold' }}>
              CodeChef
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#3e497a' }}>
              SDET and Learning Content Associate
            </Typography>
            <Typography variant="body2">
              Working on projects like Node.js DSA questions, Flask, and educational content.
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Box>
  )
}

export default Experience
