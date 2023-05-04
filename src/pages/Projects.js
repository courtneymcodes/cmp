import "./Projects.css";
import fishshop from "../images/fishshop.png";
import trivia from "../images/trivia.png";
import dailyjoy from "../images/dailyjoy.png";

function Projects() {
  return (
    <div className="main-content">
      <div>
        <h1>Projects</h1>
      </div>

      <div className="project-div">
        <div>
          <a href="https://thefishshop.netlify.app/">
            <img className="project-img" src={fishshop} />
          </a>
        </div>
        <div className="details">
          <a href="https://thefishshop.netlify.app/">
            <h2>Fish Shop App</h2>
          </a>
          <p className="project-p">Fish store app made using the MERN stack.</p>
          <a href="https://github.com/courtneymcodes/fishstoreapp-client">
            View Source Code (front-end)
          </a>
          <a href="https://github.com/courtneymcodes/fishstoreapp-server">
            View Source Code (back-end)
          </a>
        </div>
      </div>

      <div className="project-div">
        <div>
          <a href="https://triviaparty.vercel.app/">
            <img className="project-img" src={trivia} />
          </a>
        </div>
        <div className="details">
          <a href="https://triviaparty.vercel.app/">
            <h2>Trivia Party Game</h2>
          </a>
          <p className="project-p">
            Trivia game created using React that pulls questions and answers
            data from the jService api.
          </p>
          <a href="https://github.com/courtneymcodes/trivia">
            View Source Code
          </a>
        </div>
      </div>

      <div className="project-div">
        <div>
          <a href="https://dailyjoy.vercel.app/">
            <img className="project-img" src={dailyjoy} />
          </a>
        </div>
        <div className="details">
          <a href="https://dailyjoy.vercel.app/">
            <h2>Daily Joy App</h2>
          </a>
          <p className="project-p">
            Daily Joy App created to help brighten up your day. This app was
            created using React and pulls positive affirmations from this api:
            https://github.com/avyrie/affirmations-api.
          </p>
          <a href="https://github.com/courtneymcodes/daily-joy">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
