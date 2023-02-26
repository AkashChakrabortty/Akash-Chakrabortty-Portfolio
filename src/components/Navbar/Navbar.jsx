import React from "react";
import img from './Akash_Chakrabortty.jpg'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto" style={{color: '#94a9c9'}}>
      <div className="navbar">
        <div className="navbar-start primaryColor">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <a href='/' className='menu2'>About</a>
              </li>
              <li>
              <a href='/' className='menu2'>Skills</a>
              </li>
              <li>
              <a href='/' className='menu2'>Projects</a>
              </li>
              <li>
              <a href='/' className='menu2'>Contact</a>
              </li>
            </ul>
          </div>
          <div className="avatar hidden lg:flex">
            <div className="w-12 rounded-full">
              <img src={img} alt='Akash Chakrabortty'/>
            </div>
            <span className="text-3xl mt-1 font-semibold ml-1">Akash.</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
              <a href='/' className='menu2'>About</a>
              </li>
              <li>
              <a href='/' className='menu2'>Skills</a>
              </li>
              <li>
              <a href='/' className='menu2'>Projects</a>
              </li>
              <li>
              <a href='/' className='menu2'>Contact</a>
              </li>
          </ul>
        </div>

        <div className="navbar-center lg:hidden">
        <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={img} alt='Akash Chakrabortty'/>
            </div>
            <span className="text-3xl mt-1 font-semibold ml-1 primaryColor">Akash.</span>
          </div>
        </div>
        
        <div className="navbar-end text-2xl flex gap-2">
          <a className="" href="https://github.com/AkashChakrabortty" target='_blank' rel="noreferrer"><BsGithub/></a>
          <a className="" href="https://www.linkedin.com/in/akash-chakrabortty-dev/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
