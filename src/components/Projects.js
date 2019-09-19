import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <ProjectsWrapper id="projects">
      <div className="internal-section-wrapper">
        <h3>Projects</h3>
      </div>
    </ProjectsWrapper>
  );
}

export default Projects;

const ProjectsWrapper = styled.section`
  width: 100%;
  background-color: #223f52;
`;
