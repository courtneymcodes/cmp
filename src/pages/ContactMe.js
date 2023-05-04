import email from "../images/email.png";
import linkedin from "../images/linkedin.png";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="main-content">
      <h1>Contact Me</h1>

      <span id='contact-container'>
        <a className='contact-a' href="mailto: courtneyjmoreland@gmail.com">
          <span className="contact-span">
            <p className="contact-p">Send me an email</p>
            <img className="contact-img" src={email} />
          </span>
        </a>

        <a className='contact-a' href="https://www.linkedin.com/in/courtney-moreland/">
          <span className="contact-span">
            <p className="contact-p">Let's connect on linkedIn</p>
            <img id="linkedin-img" className="contact-img" src={linkedin} />
          </span>
        </a>
      </span>

    </div>
  );
}

export default ContactMe;
