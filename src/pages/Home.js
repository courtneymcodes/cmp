import './Home.css'
import desk from '../images/desk.jpg'

export default function Home (props) {
  
  
    return(
      <div className='main-content'>
        <h1 className="hello">Hello There! I'm Courtney</h1>
        <p className='home-p'>I’m a software developer in Maryland. I have a passion for coding and love learning new technologies.</p>
      
        <div className='desk-image'>
          <img  src={desk}/>
        </div>
        
      </div>
      
    )
}
