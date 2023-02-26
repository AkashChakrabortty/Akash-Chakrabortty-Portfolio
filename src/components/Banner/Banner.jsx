import React from "react";
import img from "./Akash_Chakrabortty.jpg";
import Typewriter from 'typewriter-effect';


const Banner = () => {
  return (
    <div className="w-full lg:w-4/6 mx-auto">
      <div className="hero" style={{ color: "#94a9c9" }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Akash Chakrabortty"
          />
          <div>
            <h6>Hello Everyone!</h6>
            <div className="flex gap-2 text-5xl font-bold">
            <span>I'm</span>
            <Typewriter
              options={{
                strings: ['Akash Chakrabortty', 'MERN-Stack Developer'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'text-cyan-300',
                cursorClassName: 'text-white'
              }}
             style={{color:'red'}}
            />
            </div>
            <p className="py-6">
            Hello! I am Akash Chakrabortty, a professional and passionate developer. A fast learner with a self-learning attitude. I love to explore new technologies.
            </p>
            <a
              href="https://drive.google.com/file/d/1Hcp7-XN6RtcooiDJVrsAG-oCktg-yI7X/view"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button className="btn font-color">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
