import React, {useContext} from "react";
import ThemeContext from "../../context";
import mine from '../../assets/img/banner1.jpg'
import resumePDF from '../../assets/dljonnaresume.pdf'

import {
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import {  FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";


const Intro = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div id="Home">
    <div className=" container mx-auto pt-5 h-[750px] max-[768px]:h-[100vh]  sm:h-[780px] max-[768px]:mt-20 flex max-[768px]:flex-col sm:pt-0 ">
    <div className="left -mt-16 flex-1 flex items-center justify-center max-[768px]:items-end sm:items-end">
        <div className="relative h-[80%] w-fit flex items-center sm:items-end">
          <div className="h-[80%] max-[768px]:h-full">
            <img
              loading="lazy"
              // data-aos="fade-up"
              className="image h-[450px] w-[450px] max-[768px]:h-[250px] max-[768px]:w-[250px]  overflow-hidden object-cover  max-[768px]:m-auto sm:m-0"
              src={mine}
              alt=""
            />
          </div>
          
        </div>
      </div>
      <div className=" right mt-2 max-[768px]:-mt-40 flex-1 flex flex-col justify-center gap-5 w-1/2 max-[768px]:w-full max-[768px]:p-3 sm:p-2 ">
        <div className="info max-[768px]:pt-10 w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
          <h2
            data-aos="fade-up"
            className="max-[768px]:text-lg sm:text-[2rem] font-medium"
          >
            Hey, I'm{" "}
            <span className="pl-2 font-semibold text-5xl font-mono max-[768px]:text-3xl">
              Dhana Lakshmi
            </span>
          </h2>
          <TypeAnimation
            data-aos="fade-up"
            sequence={["Frontend Developer", 2000, "Web Developer", 2000]}
            speed={30}
            wrapper="h2"
            repeat={Infinity}
            className="text-[#FCA61F] text-4xl font-bold max-[768px]:text-2xl"
          />
          <p
             data-aos="fade-up"
            className=" text-md font-medium w-3/4 max-[768px]:w-full max-[700px]:text-[.75rem]"
            style={{color:darkMode?"#fff":""}}
          >
            As an enthusiastic Front-End Developer, creating visually appealing and user-friendly websites.
          </p>
        </div>
        <div data-aos="fade-up" className="buttons flex gap-5">
          <a
            href="https://www.linkedin.com/in/dhanalakshmijonna/"
            target="_blank"
          >
            <button className="button block text-[.9rem]" > Hire Me</button>
          </a>
          <a
            href={resumePDF}
            
            className="flex items-center gap-2 border- text-[.9rem] button  px-5 py-1 sm:px-6 rounded-3xl font-bold "
            download
          >
            <div className="flex items-center gap-1 relative">
              Resume <FiDownload />
             <span class="absolute top-[-11px] right-[-31px] flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span> 
            </div>
          </a>
        </div>
        <div className="icons flex mt-5 mb-8">
          <ul
            data-aos="fade-up"
            // data-aos-duration="1500"
            className=" flex gap-5"
          >
          
            <li>
              <a href="https://www.linkedin.com/in/dhanalakshmijonna/" target="_blank">
                {" "}
                <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/DhanaLakshmi-9998" target="_blank">
                {" "}
                <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
              </a>
            </li>

            <li>
              <a href="https://twitter.com/" target="_blank">
                {" "}
                <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  </div>
  );
};

export default Intro;
