import { useState, useRef } from 'react';

import './App.css';

export default function App() {

  const ContainerElement = useRef(null);
  const [headingButtons, setHeadingButtons] = useState(false);
  const [isHeaderrem,setIsHeaderrem] = useState(false);
  const [isCircleIn,setIsCircleIn] = useState(true);




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
          <button className={headingButtons ? 'active' : ''}>Home</button>
          <button className={headingButtons ? 'active' : ''}>Projects</button>
          <button className={headingButtons ? 'active' : ''}>Contact Me</button>
        </div>
      </header>


      <div className="home">

        <div className={ isCircleIn ? "circle1" : "circle1 active"}>
          <div>
            <h2>Welcome To My Portfolio</h2>
            <h1>Website</h1>

          </div>
        </div>

        <div className={ isCircleIn ? "circle2" : "circle2 active"}></div>
      </div>
      <div className="projects">
        <div className="project"></div>
      </div>
    </div>
  );
}

