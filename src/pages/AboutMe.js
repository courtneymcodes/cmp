import html5 from '../images/html5.png'
import css3 from '../images/css3.png'
import js from '../images/js.png';
import react from '../images/react.png';
import mongoDB from '../images/mongodb.png'
import node from '../images/node.png';
import express from '../images/express.png'
import github from '../images/github.png'
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="main-content">
      <h1>About Me</h1>
      <p>
        I recently completed a full-stack Software Engineering Program at Per
        Scholas where I gained hands-on experience building applications with programming languages such
        as JavaScript as well as phases of the software development life cycle.
        <br />
        <br />
        Here are some of my skills:
      </p>

      <div className='grid'>
        <div>
          <img className="skills-img" src={html5} />
        </div>
        <div>
          <img className="skills-img" src={css3} />
        </div>
        <div>
          <img className="skills-img" src={js} />
        </div>
        <div>
          <img className="skills-img" src={react} />
        </div>
        <div>
          <img className="skills-img" src={node} />
        </div>
        <div>
          <img className="skills-img" src={mongoDB} />
        </div>
        <div>
          <img className='skills-img' src={express} />
        </div>
        <div>
          <img className='skills-img' src={github}/>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
