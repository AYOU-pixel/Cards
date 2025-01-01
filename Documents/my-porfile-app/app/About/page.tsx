"use client";
import { Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import {
  GitHub,
  LinkedIn,
  Code,
  Book,
  DesignServices,
  IntegrationInstructions,
  Web,
  Storage,
  Build,
  SportsEsports,
  MusicNote,
} from "@mui/icons-material";

// Emotion Styles
const Container = styled('div')`
  background: linear-gradient(to bottom, #1e1e1e, #121212);
  color: #e0e0e0;
  min-height: 100vh;
  padding: 2rem;
`;

const Section = styled('section')`
  margin-bottom: 4rem;
`;

const HeroContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeroImage = styled('img')`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    width: 12rem;
    height: 12rem;
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const SkillCard = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  }
`;

const IconWrapper = styled(IconButton)`
  color: #4da8da;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: #1e90ff;
  }
`;

const HobbiesContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const HobbyCard = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  }
`;

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1e90ff",
  color: "#fff",
  fontWeight: "bold",
  textTransform: "none",
  padding: "0.5rem 1.5rem",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    backgroundColor: "#1c86ee",
    transform: "scale(1.05)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
  },
}));

export default function About() {
  return (
    <Container>
      {/* Hero Section */}
      <Section>
        <HeroContainer>
          <div>
            <Typography variant="h2" style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>
              About Me
            </Typography>
            <Typography variant="body1" style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
              Hi Ayoub! It’s great to meet you! 🌟 Your passion for web development shines through. Building modern, responsive, and user-friendly applications is such a vital skill in today’s digital world. Plus, using React, Next.js, Tailwind CSS, and Material UI gives you a solid tech stack to create amazing projects.
            </Typography>
            <CustomButton
>
  Connect with me
</CustomButton>
          </div>
          <HeroImage src="/ayoub.webp" alt="Profile" />
        </HeroContainer>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle variant="h4">Skills and Expertise</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
          {[
            { name: "React", icon: <IntegrationInstructions /> },
            { name: "Next.js", icon: <Code /> },
            { name: "Tailwind CSS", icon: <Web /> },
            { name: "Material UI", icon: <DesignServices /> },
            { name: "Git", icon: <GitHub /> },
            { name: "JavaScript", icon: <Code /> },
            { name: "Backend Development", icon: <Storage /> },
            { name: "UI/UX Design", icon: <Build /> },
          ].map((skill) => (
            <SkillCard key={skill.name}>
              <IconWrapper>{skill.icon}</IconWrapper>
              <Typography variant="body1">{skill.name}</Typography>
            </SkillCard>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle variant="h4">Experience</SectionTitle>
        <SkillCard>
          <div>
            <Typography variant="h6" style={{ fontWeight: "600" }}>
              Freelance Developer
            </Typography>
            <Typography variant="body2" style={{ color: "#999", marginBottom: "0.5rem" }}>
              January 2022 - Present
            </Typography>
            <Typography variant="body1">Built multiple client projects, focusing on responsive design and modern frameworks.</Typography>
          </div>
        </SkillCard>
      </Section>

      {/* Hobbies Section */}
      <Section>
        <SectionTitle variant="h4">Hobbies and Interests</SectionTitle>
        <HobbiesContainer>
          {[
            { name: "Coding", icon: <Code />, color: "#4da8da" },
            { name: "Reading", icon: <Book />, color: "#f4d03f" },
            { name: "Gaming", icon: <SportsEsports />, color: "#a569bd" },
            { name: "Music", icon: <MusicNote />, color: "#e74c3c" },
          ].map((hobby) => (
            <HobbyCard key={hobby.name}>
              <IconWrapper style={{ color: hobby.color }}>{hobby.icon}</IconWrapper>
              <Typography variant="body1">{hobby.name}</Typography>
            </HobbyCard>
          ))}
        </HobbiesContainer>
      </Section>
    </Container>
  );
}

