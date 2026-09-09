import PersonWhite from '../../src/assets/aboutbannerlight.png'
import PersonDark from '../../src/assets/aboutbanner.png'
import Profile from "../../src/assets/profile-pic-job.jpeg"
import styles from './AboutMeStyles.module.css'
import { useTheme } from "../common/ThemeContext"


export const About = () => {
    const { theme } = useTheme();
    const personIconSrc = theme === 'dark' ? PersonDark : PersonWhite;
    
    return(
        <section className={styles.aboutSection} id="about"> 
            <div className={styles.bannerAbout}>
                <img className={styles.imgPerson} src={personIconSrc} alt="person" />
                <h2 className={styles.aboutText}>About me</h2>
            </div>
            <div className={styles.aboutGeneral}>
                <div className={styles.profilePictureAboutMeDiv}>
                    <img className={styles.profilePictureAboutMe} src={Profile} alt="Profile picture" /> 
                </div>
                <div className={styles.aboutMeTextGeneral}>
                    {/* <div className={styles.aboutMeCards}>
                        <div className={styles.cardAboutMeLeft}>
                            <h3>FrontEnd</h3>
                            <p>Experience</p>
                        </div>
                        <div className={styles.cardAboutMeRight}>
                            <h3>BackEnd</h3>
                            <p>Experience</p>
                        </div>
                    </div> */}
                    <div className={styles.textAboutMe}>
                        <p className={styles.textAboutMeOne}>
                        Mid-senior Fullstack Developer with 5+ years of Django expertise, delivering robust web applications and scalable backend systems.
                        Proven track record in optimizing database performance (40% faster queries) and implementing secure payment/authorization systems
                        with 99.9% uptime. Skilled in Django REST Framework, PostgreSQL, React, Vue.js; known for driving performance improvements and
                        technical leadership in agile teams.
                        </p>
                        
                        {/* <p  className={styles.textAboutMeTwo}>
                            In addition to programming, I'm a native Spanish speaker with expertise in translating English to Spanish
                            for video games, software, and applications. I'm always looking for opportunities to combine my programming skills with my translation expertise!
                        </p> */}
                            
                    </div>
                </div>
                
            </div>
        </section>
    )
}