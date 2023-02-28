import React from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsData } from "../ProjectsData/ProjectsData";
const Projects = () => {
 
  return (
    <div className="w-full lg:w-4/6 mx-auto">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">
        <HeaderStyle headerSpan={"My Projects"} />
      </h1>
      <div className="lg:flex gap-5  ">
      {
        ProjectsData.map((project,index)=>{
          return <ProjectCard project={project} key={index} />
        })
      }
      </div>
    </div>
  );
};

export default Projects;
