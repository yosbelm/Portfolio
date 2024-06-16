import Profile from "../../src/assets/hero-banner.jpg"
import GithubWhite from "../../src/assets/github.png"
import GitHubDark from "../../src/assets/github-dark.svg"
import Linkedin from "../../src/assets/linkedinblue.png"
import styles from './HeroStyles.module.css' 
import { useTheme } from "../common/ThemeContext"

export const Hero = () => {
        const { theme } = useTheme();
        const githubIconSrc = theme === 'dark' ? GitHubDark : GithubWhite;
    
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.profilePicDiv}>
                <img  className={styles.profilePhoto} src={Profile} alt="Profile picture" />
            </div>
            <div className={styles.textoRigth}>
                <div className={styles.heroText}>
                    <p className={styles.hello}>Hello, I'm</p>
                    <h1 className={styles.Yosbel}>Yosbel</h1>
                    <p className={styles.frontend}>FullStack Developer</p>
                </div>
                <div className={styles.botonContainer}>
                    <button className={styles.botonCv} onClick="">Download CV</button>
                    <button className={styles.botonContact} onClick={() => location.href='mailto:yosbelm99@gmail.com'}>Email</button>
                </div>
                <div className={styles.socialMedia}>
                    <img src={githubIconSrc} alt="GitHub logo" 
                    className={styles.github} onClick={()=> location.href = 'https://github.com/yosbelm'}/>
                    <img src={Linkedin} alt="linkedin logo" 
                    className={styles.linkedin} onClick={()=> location.href = 'https://linkedin.com/yosbelm'}/>
                </div>
            </div>
            
        </section>
        
           
    )
} 