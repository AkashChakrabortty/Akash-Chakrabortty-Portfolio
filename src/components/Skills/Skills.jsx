import React from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import { BsCheckLg } from "react-icons/bs";
import frontend from "./frontend.jpg";
import backend from './backend.jpg';
import others from './others.jpg'
import database from './database.jpg'
import SkillsCard from "../SkillsCard/SkillsCard";
const Skills = () => {
  const Skills = [
    {
      id:1,
      icon: frontend,
      title: 'Frontend',
      Skills: ['HTML-5','CSS-3','Bootstrap','Tailwind','React']
    },
    {
      id:2,
      icon: backend,
      title: 'Backend',
      Skills: ['Node','Express']
    },
    {
      id:3,
      icon: database,
      title: 'Database',
      Skills: ['MongoDB']
    },
    {
      id:4,
      icon: others,
      title: 'Others',
      Skills: ['Git','Socket','Dev tools','Firebase']
    }
  ]
  return (
    <div className="w-full lg:w-4/6 mx-auto">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">
        <HeaderStyle headerSpan={"Skills"} />
      </h1>
      <div className="lg:flex gap-5  ">
      {
        Skills.map((skill,index)=>{
          return <SkillsCard skills={skill} key={index} />
        })
      }
      </div>
    </div>
  );
};

export default Skills;
