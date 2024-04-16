import React,{useContext} from "react";
import { RiLink } from "react-icons/ri";
import { Link } from 'react-router-dom'
import ThemeContext from "../../context";

const Resume = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div id="Resume" className="container m-auto mt-16 p-2">
        {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%] max-[768px]:mb-2" style={{color:darkMode?"#FCA61F":''}}>
          Here are my qualifications.
        </p>
      </div>
       <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-10 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black" style={{color:darkMode?"#fff":''}}>
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl" style={{color:darkMode?"#000":''}}>
                  B.Sc, Computer Science
                </h1>
                <Link to={"https://www.vijethacollege.edu.in/"} target="_blank">
                  <span className=" text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                    <RiLink /> Vijetha Degree College, Hyderabad.
                  </span>
                </Link>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2015 - Year 2019
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">  
                As a dedicated graduate, I have a good understanding of web development technologies such as HTML5, CSS, Bootstrap, TailwindCSS, JavaScript, React js. Additionally, I'm proficient in backend technologies such as Python and Oracle. I have good knowledge in Restful Api, GitHub and VScode. Now, I’m excited to learn and grow in a dynamic development environment.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
    </div>
  )
}

export default Resume
