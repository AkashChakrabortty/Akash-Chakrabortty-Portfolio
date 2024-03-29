import React from "react";
import img from "./Akash_Chakrabortty.jpg";
import Typewriter from 'typewriter-effect';
import Button from "../Button/Button";


const Banner = () => {
  return (
    <div className="w-full lg:w-4/6 mx-auto my-3">
      <div className="hero" style={{ color: "#94a9c9" }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Akash Chakrabortty"
          /> */}
          <img
            src={img}
            className="w-2/5 rounded-full shadow-2xl"
            alt="Akash Chakrabortty"
          />
          <div className="w-11/12 lg:w-full">
            <h6 className="text-xl">Hello Everyone!</h6>
            <div className="flex gap-2 text-2xl lg:text-3xl font-bold">
            <span>I'm</span>
            <Typewriter
              options={{
                strings: ['Akash Chakrabortty', 'MERN-Stack Developer'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'text-cyan-400',
                cursorClassName: 'text-white'
              }}
            />
            </div>
            <p className="py-6 text-xl text-justify">
            Hello! I am Akash Chakrabortty, a professional and passionate developer. A fast learner with a self-learning attitude. I love to explore new technologies.
            </p>
            <a
              href="https://drive.google.com/file/d/1Hcp7-XN6RtcooiDJVrsAG-oCktg-yI7X/view"
              target="_blank"
              rel="noreferrer"
            >
             <Button btn={'Download Resume'}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
