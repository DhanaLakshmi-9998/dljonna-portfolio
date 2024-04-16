import React, { useContext } from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import ThemeContext from "../../context";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiOracle } from "react-icons/si";

import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";

import { FaPython, FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="Skills">
      <div className=" container m-auto p-3">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex max-[768px]:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
              style={{ color: darkMode ? "#FCA61F" : "" }}
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={95} />
                <ProgressBar logo={<SiTailwindcss />} name={"TailwindCSS"} value={90}/>
                <ProgressBar logo={<SiJavascript />}name={"Javascript"} value={85} />             
                <ProgressBar logo={<FaReact />} name={"React.js"} value={85} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div
            className="right relative flex-1 flex flex-wrap p-5 rounded-xl gap-10 items-center justify-center sm:w-full"
            style={{ backgroundColor: darkMode ? "#F5C32C" : "" }}
          >
            <div className="first2 flex flex-col gap-10 ">
              <SkillBox
                logo={<BsBootstrap />}
                black={"white"}
                white={"black"}
                skill={"Bootstrap"}
              />
              <SkillBox
                logo={<SiOracle />}
                black={"black"}
                white={"white"}
                skill={"Oracle"}
              />
            </div>
            <div className="last2 flex flex-col gap-10 mt-10 ">
              <SkillBox
                className="bg-black"
                logo={<FaPython />}
                black={"black"}
                white={"white"}
                skill={"Python"}
              />

              <SkillBox
                className="overflow-hidden"
                logo={<SiTypescript className="p-1 text-white" />}
                black={"white"}
                white={"black"}
                skill={"Typescript"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
