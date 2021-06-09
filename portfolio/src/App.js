import './App.css';
import {Parallax} from 'react-parallax'


import Navbar  from './components/navbar/navbar';
import Carousal from './components/carousal/Carousal';
import TitleMessage from './components/title/Title';
import About from './pages/About';
import BgImage from "./assets/img/parallex/background.webp";
import Skills from './pages/Skills';
import ProjectTimiline from './components/timeline';
import Contact from './pages/ContactForm';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousal/>
      <TitleMessage/>


      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >  
          <About />    
        </Parallax>
      </div>

      <Skills/>
      <ProjectTimiline/>
      <Contact/>
      <Footer/>

    </div>


  );
}


export default App;
