 import React, { useState, useEffect, useContext} from "react";
 import "./navbar.css";
 import Toggle from "../toggle/toggle";
 import { Link } from "react-scroll";
 import { RiMenu2Fill } from "react-icons/ri";
 import { RxCross2 } from "react-icons/rx";
 import ThemeContext from "../../context";

 const Navbar = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
   const [toggleMenu,setToggleMenu] = useState(false);
 const [scrollPosition, setScrollPosition] = useState(0);
 useEffect(() => {
   const handleScroll = () => {
     setScrollPosition(window.scrollY);
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

   return (
     <div id="home" data-aos="fade-down" className={` w-full m-auto gap-4 px-6 flex justify-between fixed top-0 left-0 py-6 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-lg` : ` bg-transparent`    } `}
        style={{backgroundColor:darkMode?"#100":"",boxShadow:darkMode? " rgba(200, 200, 200, 0.45) 0px 25px 20px -20px":""}}>
       {/* ledt side navbar */}
       <div className=" flex-1 flex items-center gap-7 ">
         <div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl cursor-pointer hover:text-[#FCA61F]"
          >
            Dhanalakshmi
          </Link>
        </div>

         <Toggle />
       </div>
       {/* right side navbar */}
       <div className="flex items-center justify-center font-medium flex-1">
         <div className="n-list" style={{flex:10}}>
           <ul className="flex gap-7 mr-3 list-none ">
             <Link
              spy={true}
              to="Home"
              activeClass="activeClass"
              smooth={true}
            >
              <li className=" font-semibold hover:text-[#FCA61F] cursor-pointer text-lg">Home</li>
            </Link>

            <Link spy={true} to="Skills" smooth={true}>
              <li className=" font-semibold hover:text-[#FCA61F] cursor-pointer text-lg">Skills</li>
            </Link>
            <Link spy={true} to="Works" smooth={true}>
              <li className=" font-semibold hover:text-[#FCA61F] cursor-pointer text-lg">Works</li>
            </Link>
            <Link spy={true} to="Resume" smooth={true}>
              <li className=" font-semibold hover:text-[#FCA61F] cursor-pointer text-lg">About</li>
            </Link>
           
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button w-24" style={{flex:2}}>Contact</button>
        </Link>
      </div>
      {/* For mobile devices */}
      <div className="app_smallscreen">
        <RiMenu2Fill
        
        className="menu-icon"
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar__smallscreen__overlay">
            <RxCross2
              onClick={() => {
                setToggleMenu(false);
              }}
              
              className="overlay__close"
            />

            <ul className="app_smallscreen_links">
              <Link
              
                spy={true}
                to="Home"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="skills"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Skills</li>
              </Link>
              <Link
                spy={true}
                to="works"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>Works</li>
              </Link>
              <Link
                spy={true}
                to="About"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <li>About</li>
              </Link>
              <Link
                spy={true}
                to="Contact"
                smooth={true}
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                  <button className="button block ml-6 text-md" style={{margin:'2rem', marginLeft:'2.5rem'}}>Contact</button>
               
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
