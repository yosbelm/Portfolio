import Person from './assets/about-banner.png'
import Profile from "./assets/profile-pic-job.jpeg"

export const About = () => {
    return(
        <section className="about-section" id="about">
            <div className='banner-about'>
                <img className='img-person' src={Person} alt="person" />
                <h2 className='about-text'>About me</h2>
            </div>
            <div className='about-general'>
                <div className='profile-picture-about-me-div'>
                    <img className="profile-picture-about-me" src={Profile} alt="Profile picture" />
                </div>
                <div className='about-me-text-general'>
                    <div className='about-me-cards'>
                        <div className='card-about-me-left'>
                            <h3>FrontEnd</h3>
                            <p>Experience</p>
                        </div>
                        <div className='card-about-me-right'>
                            <h3>BackEnd</h3>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className='text-about-me'>
                        <p className='text-about-me-1'>
                            Hi, I'm a self-taught programmer with a passion for technology, mathematics, and problem-solving.
                            I've honed my programming skills through personal projects and online courses, and I'm always eager for new challenges to fuel my learning and growth.
                        </p>
                        
                        <p  className='text-about-me-2'>
                            In addition to programming, I'm a native Spanish speaker with expertise in translating English to Spanish
                            for video games, software, and applications. I'm always looking for opportunities to combine my programming skills with my translation expertise!
                        </p>
                            
                    </div>
                </div>
                
            </div>
        </section>
    )
}