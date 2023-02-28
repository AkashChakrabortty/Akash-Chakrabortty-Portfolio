import React from "react";
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
        <label htmlFor="my-modal-5" className=" bg-cyan-400 text-white font-semibold py-3 border-2 border-cyan-400 px-10 rounded-tl-[20px] rounded-br-[20px] mt-4 hover:bg-transparent hover:border-2 transition-[.5s] hover:border-cyan-400 text-xl">Details</label>
        </div>
      </div>
      {/* modal */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
