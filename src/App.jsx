
import './App.css'
import Intro from "./components/intro/intro";
import Contact from "./components/contactus/contact";
import Footer from "./components/Footer/footer";
import { useContext } from "react";
import ThemeContext from "./context";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Navbar from './components/navbar/navbar';
import Resume from './components/resume/resume';

function App() {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App" style={{
      background:darkMode? 'black':'',
      color:darkMode?"white":''
    }}>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Resume/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
