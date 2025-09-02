import { useRef } from 'react';

import './App.css';

export default function App() {

  const HeaderElement = useRef(null);
  const HeaderHeading = useRef(null);
  const HeaderButton1 = useRef(null);
  const HeaderButton2 = useRef(null);
  const HeaderButton3 = useRef(null);
  const ContainerElement = useRef(null);
  const Circle1 = useRef(null);
  const Circle2 = useRef(null);



  return (
    <div className="main-container" ref={ContainerElement} onScroll={()=>{
      if(HeaderElement.current){
        if(ContainerElement.current.scrollTop>20){
          HeaderElement.current.classList.add('active');
          Circle1.current.classList.add('active');
        }
        else{
          HeaderElement.current.classList.remove('active');
          Circle1.current.classList.remove('active');

        }
      }
    
      if(HeaderHeading.current){
        if(ContainerElement.current.scrollTop>window.innerHeight*0.9){
          HeaderHeading.current.classList.add('active');
          HeaderButton1.current.classList.add('active');
          HeaderButton2.current.classList.add('active');
          HeaderButton3.current.classList.add('active');
        }
        else{
          HeaderHeading.current.classList.remove('active');
          HeaderButton1.current.classList.remove('active');
          HeaderButton2.current.classList.remove('active');
          HeaderButton3.current.classList.remove('active');
        }
      }
      
    }}>
      <header ref={HeaderElement}>
        <h2 ref={HeaderHeading}>Portfolio</h2>
        <div className="right-side">
          <button ref={HeaderButton1}>Home</button>
          <button ref={HeaderButton2}>Projects</button>
          <button ref={HeaderButton3}>Contact Me</button>
        </div>
      </header>
      
      
      <div className="home">
  
        <div ref={Circle1} className="circle1">
          <h1>Hi, I'm Hassaan</h1>
        </div>
    
        <div ref={Circle2} className="circle2"></div>
      </div>
      <div className="projects">
        <div className="project"></div>
      </div>
    </div>
  );
}

