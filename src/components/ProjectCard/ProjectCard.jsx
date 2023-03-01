import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProjectCard = ({ project }) => {
  return (
    <div className="card w-3/4 lg:w-1/3 mx-auto m-24  drop-shadow-2xl App">
      <figure className="px-10 -mt-16">
        <img src={project?.img[0]} alt={project?.name} className="rounded-xl" />
      </figure>
      <div className="card-body -mt-6">
        <h2 className="font-semibold text-center text-cyan-400">
          {project?.type}
        </h2>
        <h2 className="font-semibold text-center" style={{ color: "#94a9c9" }}>
          {project?.name}
        </h2>
        <div className="flex justify-center">
       <Link to='/projectDetails' state={{ project: project}}><Button btn={'Details'}/></Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
