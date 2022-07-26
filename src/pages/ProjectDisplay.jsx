import React from "react";
import { useParams } from "react-router-dom";
import { Lists } from "../helpers/Lists";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = Lists[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>{project.link}</p>
    </div>
  );
}

export default ProjectDisplay;
