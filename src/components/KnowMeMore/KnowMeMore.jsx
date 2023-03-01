import React from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import img from "./16766-forget-password-animation.gif";

const KnowMeMore = () => {
  return (
    <div className="w-full lg:w-4/6 mx-auto">
       <h1 className="lg:text-5xl text-4xl font-bold text-center">
        <HeaderStyle headerSpan={"Know Me More"} />
      </h1>
      <div className="hero" style={{ color: "#94a9c9" }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="w-2/5 rounded-full shadow-2xl"
            alt="Know me more"
          />
          <div className="w-11/12 lg:w-full">
            <p className="py-6 text-xl text-justify">
              My name is Akash Chakrabortty. I am a student of CSE. My home town
              is Barishal,Bangladesh. <br />
              <br />I prefer to introduce myself as a problem solver in addition
              to introducing myself as a developer.Try to improve my problem
              solving skills by participating in online and offline contests.
              Which will bring benefit to my working company. I love almost all
              the stacks of web development. My current stack includes
              HTML5, CSS3, Bootstrap, Tailwind, daisyUi, React, Node,
              Express, MongoDB, Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMeMore;
