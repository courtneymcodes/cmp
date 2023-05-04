import home from '../images/home.png'
import about from '../images/about.png'
import projects from '../images/projects.png'
import contact from '../images/contact.png'
import './Nav.css'

function Nav() {
    return ( 
      <div className='nav-container'>
         <div className='nav'>
            <img className='icon' src={home} alt=''/>
            <a href='/'>Home</a> 
         </div>
          <div className='nav'>
           <img className='icon' src={about} alt=''/> 
           <a href='/aboutme'>About Me</a> 
         </div>
         <div className='nav'>
           <img className='icon' src={projects} alt=''/> 
           <a href='/projects'>Projects</a> 
         </div>
         <div className='nav'>
           <img className='icon' src={contact} alt=''/> 
           <a href='/contact'>Contact Me</a> 
         </div>

       </div>
     );
}

export default Nav;