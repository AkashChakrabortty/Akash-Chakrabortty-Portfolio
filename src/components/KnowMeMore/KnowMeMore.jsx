import React from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import img from './16766-forget-password-animation.gif';

const KnowMeMore = () => {
  return (
    <div id="about">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">
        <HeaderStyle headerSpan={'Know Me More'}/> 
      </h1>
      <div className="hero">
        <div className="w-full lg:w-4/6 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={img}
              className="w-2/5 rounded-full shadow-2xl"
              alt="who am i?"
            />
            <div>
              <p className="py-6 text-xl text-justify" style={{ color: "#94a9c9" }}>
                My name is Akash Chakrabortty. I am a student of CSE. My home
                town is Barishal,Bangladesh. <br />
                <br />I prefer to introduce myself as a problem solver in
                addition to introducing myself as a developer.Try to improve my
                problem solving skills by participating in online and offline
                contests. Which will bring benefit to my working company. I love
                almost all the stacks of web development. My current stack
                includes
                HTML,HTML-5,CSS,CSS-3,Bootstrap,Tailwind,daisyUi,React,Nodejs,
                Express,MongoDB,Firebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMeMore;
