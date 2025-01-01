"use client";
import { Button, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A feature-rich online store built with Next.js and Tailwind CSS, offering seamless user experience and lightning-fast performance.",
      image: "stor.png",
      link: "https://ayou-store.netlify.app",
    },
    {
      title: "Portfolio Website",
      description:
        "An elegant personal website showcasing creative projects, skills, and achievements with a focus on responsive design.",
      image: "/port.png",
      link: "https://portfolioapping.netlify.app",
    },
    {
      title: "Social Media App",
      description:
        "A modern social networking app with real-time messaging and dynamic user interactions, leveraging advanced web technologies.",
      image: "msg.png",
      link: "https://watsap-msg.netlify.app",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <Container maxWidth="lg">
        {/* Title */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(to right, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              transition: "transform 0.3s ease, color 0.3s ease",
              '&:hover': {
                transform: "scale(1.05)",
                color: "#667eea",
              },
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              fontSize: "1.125rem",
              color: "gray",
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.8,
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            A collection of my most impactful projects, designed and developed to solve real-world problems with innovative solutions.
          </Typography>
        </div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#1a202c',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    transform: "scale(1.05)",
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Project Image */}
                <CardMedia
                  component="img"
                  alt={`${project.title} image`}
                  image={project.image}
                  height="200"
                  sx={{
                    objectFit: 'cover',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <CardContent sx={{ padding: 4 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: '#667eea',
                      fontWeight: 'bold',
                      mb: 2,
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#764ba2',
                      },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e0' }}>
                    {project.description}
                  </Typography>
                </CardContent>

                {/* View Project Button */}
                <CardContent sx={{ paddingTop: 0, textAlign: 'center', paddingBottom: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: '50px',
                      padding: '12px 24px',
                      textTransform: 'none',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
                        transform: 'scale(1.05)',
                      },
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

// Styled Section Wrapper for better control
const SectionWrapper = styled('section')({
  background: 'linear-gradient(to bottom, #1a202c, #2d3748)',
  paddingTop: '60px',
  paddingBottom: '60px',
  position: 'relative',
  overflow: 'hidden',
  // Starry night background with animation
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3RyZWFtcy9zY3JlZW5zY2FwZSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgY2xhc3M9InN0YXJmY29sb3IiPjwvcmVjdD48cGF0aCBkPSJNNTAsNTAgYTMuMDE3LDMuMDE3IDAgMCAwIC0zLjAxNy0zLjAxNyIgY2xhc3M9InN0YXJmY29sb3IiIHN0eWxlPSJmaWxsOm5vbmUsIHN0cm9rZTpibHVlLCBzdHJva2Utb3BhY2l0eTozLjk5OCwgc3Ryb2tlLXdpZHRoOjAuMSwgc3Ryb2tlLWhlaWdodDoyLjMyNztzZmlsZTpvcGFjdGl2ZSI+PC9wYXRoPjxwYXRoIGQ9Ik01MCwyMCAxMCwxMCAiY2xhc3M9InN0YXJmY29sb3IiIHN0eWxlPSJmaWxsOm5vbmUsIHN0cm9rZTpibHVlLCBzdHJva2Utb3BhY2l0eTozLjk5OCwgc3Ryb2tlLXdpZHRoOjAuMSwgc3Ryb2tlLWhlaWdodDoyLjMyNztzZmlsZTpvcGFjdGl2ZSI+PC9wYXRoPjwvc3ZnPg==") no-repeat center center fixed',
    animation: 'twinkle 3s infinite alternate',
  },
  '@keyframes twinkle': {
    '0%': {
      opacity: 0.5,
    },
    '50%': {
      opacity: 0.8,
    },
    '100%': {
      opacity: 0.5,
    },
  },
});

export default Projects;
