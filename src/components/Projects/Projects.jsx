import React from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import cpt1 from './cpt-1.jpg'
import cpt2 from './cpt-2.jpg'
import cpt3 from './cpt-3.jpg'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import t from './t.jpg'
import ProjectCard from "../ProjectCard/ProjectCard";
const Projects = () => {
  const Projects = [
    {
      id:1,
      stack: 'Full Stack Project',
      type: 'Group Project',
      name: 'Capital Trust Bank',
      img: [cpt1,cpt2,cpt3]
    },
    {
      id:2,
      stack: 'Full Stack Project',
      type: 'Individual Project',
      name: 'ChitChat',
      img: [c1,c2,c3]
    },
    {
      id:3,
      stack: 'JavaScript Fun Project',
      type: 'Individual Project',
      name: 'TicTacToe',
      img: [t]
    },
  ]
  return (
    <div className="w-full lg:w-4/6 mx-auto">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">
        <HeaderStyle headerSpan={"My Projects"} />
      </h1>
      <div className="lg:flex gap-5  ">
      {
        Projects.map((project,index)=>{
          return <ProjectCard project={project} key={index} />
        })
      }
      </div>
    </div>
  );
};

export default Projects;
