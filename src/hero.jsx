import Profile from "./assets/hero-banner.jpg"
import GitHub from "./assets/github.png"
import Linkedin from "./assets/linkedin.png"


export const Hero = () => {
    return (
        <section className="section-hero">
            <div>
                <img  className="profile-photo" src={Profile} alt="Profile picture" />
            </div>
            <div className="texto-rigth">
                <div className="hero-text">
                    <p className="hello">Hello, I'm</p>
                    <h1 className="Yosbel">Yosbel</h1>
                    <p className="frontend">FrontEnd Developer</p>
                </div>
                <div className="boton-container">
                    <button className="boton-cv" onClick="">Download CV</button>
                    <button className="boton-contact" onClick={"location.href('./#contact')"}>Email</button>
                </div>
                <div className="social-media">
                    <img src={GitHub} alt="GitHub logo" 
                    className="github" onClick={()=> location.href = 'https://github.com/yosbelm'}/>
                    <img src={Linkedin} alt="linkedin logo" 
                    className="linkedin" onClick={()=> location.href = 'https://linkedin.com/yosbelm'}/>
                </div>
            </div>
            
        </section>
        
           
    )
} 