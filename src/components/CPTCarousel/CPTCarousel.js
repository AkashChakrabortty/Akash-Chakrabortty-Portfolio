import React from 'react';
import { ProjectsData } from '../ProjectsData/ProjectsData';

const CPTCarousel = () => {
    return (
        <div className="w-full lg:w-4/6 mx-auto overflow-hidden">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={ProjectsData[0].img[0]} alt={ProjectsData[0]?.name}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle" >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle" >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
          src={ProjectsData[0].img[1]} alt={ProjectsData[0]?.name}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle" >
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle" >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img
          src={ProjectsData[0].img[2]} alt={ProjectsData[0]?.name}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle"  >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle"  >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CPTCarousel;