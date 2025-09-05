import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import javascriptLogo from './assets/javascript.svg';
import htmlLogo from './assets/html.svg';
import cssLogo from './assets/css.svg';
import './App.css';

export default function App() {

  const ContainerElement = useRef(null);
  const [headingButtons, setHeadingButtons] = useState(false);
  const [isHeaderrem, setIsHeaderrem] = useState(false);
  const [isCircleIn, setIsCircleIn] = useState(true);




  return (
    <div className="main-container" ref={ContainerElement} onScroll={() => {
      if (ContainerElement.current) {
        if (ContainerElement.current.scrollTop > window.innerHeight * 0.07) {
          setIsHeaderrem(true);
          setIsCircleIn(false);
        }
        else {
          setIsHeaderrem(false);
          setIsCircleIn(true);
        }
      }
      if (ContainerElement.current.scrollTop > window.innerHeight * 0.9) {
        setHeadingButtons(true);
      }
      else {
        setHeadingButtons(false);
      }
    }}>
      <header className={isHeaderrem ? 'active' : ''}>
        <h2 className={headingButtons ? 'active' : ''}>Portfolio</h2>
        <div className="right-side">
          <button className={headingButtons ? 'active' : ''} onClick={() => { ContainerElement.current.scrollTop = 0; }}>Home</button>
          <button className={headingButtons ? 'active' : ''} onClick={() => { ContainerElement.current.scrollTop = window.innerHeight; }}>Projects</button>
          <button className={headingButtons ? 'active' : ''}>Contact Me</button>
        </div>
      </header>
      <div className="home">
        <div className={isCircleIn ? "circle1" : "circle1 active"}>
          <div>
            <h2>Welcome To My Portfolio</h2>
            <h1>Website</h1>
          </div>
        </div>
        <div className={isCircleIn ? "circle2" : "circle2 active"}>
          <img src={htmlLogo} className="logo logo1" alt="Logo 1" />
          <img src={cssLogo} className="logo logo2" alt="Logo 2" />
          <img src={javascriptLogo} className="logo logo3" alt="Logo 3" />
          <img src={reactLogo} className="logo logo4" alt="Logo 4" />
          <div>
            <button onClick={() => { ContainerElement.current.scrollTop = window.innerHeight; }}>&lt;/&gt;</button>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="project"></div>
      </div>
    </div>
  );
}

