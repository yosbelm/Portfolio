import Person from '../../src/assets/about-banner.png'
import Profile from "../../src/assets/profile-pic-job.jpeg"
import styles from './AboutMeStyles.module.css'

export const About = () => {
    return(
        <section className={styles.aboutSection} id="about">
            <div className={styles.bannerAbout}>
                <img className={styles.imgPerson} src={Person} alt="person" />
                <h2 className={styles.aboutText}>About me</h2>
            </div>
            <div className={styles.aboutGeneral}>
                <div className={styles.profilePictureAboutMeDiv}>
                    <img className={styles.profilePictureAboutMe} src={Profile} alt="Profile picture" />
                </div>
                <div className={styles.aboutMeTextGeneral}>
                    <div className={styles.aboutMeCards}>
                        <div className={styles.cardAboutMeLeft}>
                            <h3>FrontEnd</h3>
                            <p>Experience</p>
                        </div>
                        <div className={styles.cardAboutMeRight}>
                            <h3>BackEnd</h3>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className={styles.textAboutMe}>
                        <p className={styles.textAboutMeOne}>
                            Hi, I'm a self-taught programmer with a passion for technology, mathematics, and problem-solving.
                            I've honed my programming skills through personal projects and online courses, and I'm always eager for new challenges to fuel my learning and growth.
                        </p>
                        
                        <p  className={styles.textAboutMeTwo}>
                            In addition to programming, I'm a native Spanish speaker with expertise in translating English to Spanish
                            for video games, software, and applications. I'm always looking for opportunities to combine my programming skills with my translation expertise!
                        </p>
                            
                    </div>
                </div>
                
            </div>
        </section>
    )
}