import React, { useContext, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import ThemeContext from "../../context";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [title, setTitle] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzzw07n",
        "template_1d2v0wr",
        form.current,
        "OgY1AlOIogKgCQMqz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTitle({ user_name: "", user_email: "", message: "" });
          alert("Thanks for submitting the form");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="container m-auto mt-16 p-3">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] max-[768px]:w-[100%] mx-auto mt-16 flex items-center justify-center max-[768px]:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center max-[768px]:flex-col max-[768px]:w-full">
          <div className="flex-3 w-full gap-3 flex items-end justify-end flex-col max-[768px]:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-semibold max-[600px]:text-3xl w-full">Get in Touch</h1>
              <h3 className="text-xl max-[500px]:text-lg font-medium" style={{color:darkMode?"#FCA61F":""}}>
                Contact Me
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] bg-white"
            >
              <BsArrowRight className=" max-[768px]:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">

        <form ref={form} onSubmit={sendEmail} data-aos="zoom-in"
        className="flex justify-center items-center flex-col gap-5 w-[70%] max-[768px]:w-[100%] sm:w-[95%] mx-auto">
          <input
           className="px-3 border-[2px] border-[#FCA61F] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            type="text"
            name="user_name"
            placeholder="Name"
            value={title.user_name}
            onChange={(e) => setTitle(e.target.value)}
            style={{color:darkMode?"#000":""}}
            required
          />
          <input
            type="email"
            name="user_email"
            className="px-3 border-[2px] border-[#FCA61F] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            placeholder="Email"
            value={title.user_email}
            onChange={(e) => setTitle(e.target.value)}
            style={{color:darkMode?"#000":""}}
            required
          />
          <textarea
            name="message"
            className="px-3 border-[2px] border-[#FCA61F] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            style={{color:darkMode?"#000":""}}
            rows="4"
              cols="50"
            placeholder="Write your message"
            value={title.message}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="button flex">
            <span className="pr-1 mt-1">
              <RiSendPlaneFill/>
            </span>
            Send
          </button>
          
        </form>
          
        </div>
      </div>
    </div>
    // <div className="container m-auto mt-16 contact-form" id="Contact">
    //   {/* heading */}
    //   <div
    //     // data-aos="fade-up"
    //     className="relative mb-5 "
    //   >
    //     <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
    //       Contact
    //     </h3>
    //     <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
    //   </div>
    //   {/* left side copy and paste from work section */}
    //   <div className=" flex ">
        
    //       <div data-aos="zoom-in" className="mt-10 flex items-center justify-center text-center max-[768px]:pl-20 flex-col">
    //         <h1
    //           className="text-5xl font-semibold max-[768px]:text-2xl"
    //           style={{ color: darkMode ? "white" : "" }}
    //         >
    //           Get in Touch
    //         </h1>
    //         <h3 className="text-xl max-[768px]:text-lg font-medium" style={{color:darkMode?"#FCA61F":""}}>Contact Me</h3>
    //       </div>
        
    //   </div>
    //   {/* right side form */}
    //   <div className="flex justify-center items-center flex-1 c-right -mt-14 max-[768px]:pt-14">
    //     <form ref={form} onSubmit={sendEmail} data-aos="zoom-in"
    //     className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto">
    //       <input
    //        className="px-3 border-[2px] border-[#FCA61F] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
    //         type="text"
    //         name="user_name"
    //         placeholder="Name"
    //         value={title.user_name}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //       <input
    //         type="email"
    //         name="user_email"
    //         className="px-3 border-[2px] border-[#FCA61F] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
    //         placeholder="Email"
    //         value={title.user_email}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //       <textarea
    //         name="message"
    //         className="px-3 border-[2px] border-[#FCA61F] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
           
    //         rows="4"
    //           cols="50"
    //         placeholder="Write your message"
    //         value={title.message}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //       <button className="button c-button" type="submit">
    //         Submit
    //       </button>
          
    //     </form>
    //   </div>
    // </div>
  );
};

export default Contact;
