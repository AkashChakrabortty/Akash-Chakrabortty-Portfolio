import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const SkillsCard = ({skills}) => {
    return (
        <div className="card w-3/4 lg:w-1/4 mx-auto m-24 bg-base-100 shadow-xl">
        <figure className="px-10 -mt-16">
          <div className="avatar">
            <div className="w-24 rounded-full ">
              <img
                src={skills?.icon}
                alt="Shoes"
                className="rounded-xl"
              />
            </div>
          </div>
        </figure>
        <div className="card-body -mt-6">
          <h2 className="font-semibold text-center">{skills?.title}</h2>
         {
            skills.Skills.map((skill,index)=>{
                return  <span className="flex gap-1 items-center" key={index}>
                <BsCheckLg style={{ color: "#1cc2e7" }} />
                <span>{skill}</span>
              </span>
            })
         }
        </div>
      </div>
    );
};

export default SkillsCard;