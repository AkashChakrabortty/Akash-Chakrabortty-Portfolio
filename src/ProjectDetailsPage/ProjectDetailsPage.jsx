import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderStyle from "../components/HeaderStyle/HeaderStyle";

const ProjectDetailsPage = () => {
  const state = useLocation();
  const project = state?.state?.project;
  return (
    <div className="w-full lg:w-4/6 mx-auto">
      <h1 className="lg:text-3xl text-2xl font-bold text-center">
        <HeaderStyle headerSpan={`${project?.name}(${project?.type})`} />
      </h1>
      <div className="img flex flex-col lg:flex-row gap-5 mt-5">
        <div className="img1 w-full lg:w-1/3">
          <img src={project?.img[0]} alt={project?.name} />
        </div>
        <div className="img2 w-full lg:w-1/3">
          <img src={project?.img[1]} alt={project?.name} />
        </div>
        <div className="img3 w-full lg:w-1/3">
          <img src={project?.img[2]} alt={project?.name} />
        </div>
      </div>
      <div className="feature w-11/12 lg:w-full">
        {project?.details?.map((value, index) => {
          return (
            <p
              className="text-xl text-justify p-2"
              key={index}
              style={{ color: "#94a9c9" }}
            >
              {value}
            </p>
          );
        })}
      </div>
      <div className="link">  
          <h2 className="font-semibold text-center text-cyan-400">
            <Link to={project?.link[0]} target="_blank">
              Live
            </Link>
            ,{" "}
            <Link to={project?.link[1]} target="_blank">
              Client
            </Link>
            ,{" "}
            <Link to={project?.link[2]} target="_blank">
              Server
            </Link>
          </h2>    
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
