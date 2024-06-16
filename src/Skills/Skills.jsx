import BrainWhite from '../../src/assets/brainWhite.png'
import BrainDark from '../../src/assets/brainDark.png'
import JavaScript from '../../src/assets/jscript.svg'
import HTML from '../../src/assets/html.svg'
import CSS from '../../src/assets/css.svg'
import React from '../../src/assets/react.svg'
import Python from '../../src/assets/piton.png'
import Pandas from '../../src/assets/pandas.png'
import GitHub from '../../src/assets/github-skill-light.png'
import Git from '../../src/assets/git.svg'
import VSC from '../../src/assets/vsc.png'
import Flet from '../../src/assets/flet.png'
import styles from './SkillsStyles.module.css'
import { useTheme } from "../common/ThemeContext"


export const Skills = () => {
    const { theme } = useTheme();
    const brainIconSrc = theme === 'dark' ? BrainDark : BrainWhite;
    
    return(
        <section className={styles.skillsSection} id="skills">
            <div className={styles.bannerSkills}>
                <img className={styles.imgBrain} src={brainIconSrc} alt="brain" />
                <h2 className={styles.skillsText}>Skills</h2>
            </div>
            <div className={styles.logosProg}>
                <div className={styles.frontendLogo}>
                    <div className={styles.jsDiv}>
                        <img src={JavaScript} alt="Javascript logo" />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.htmlDiv}>
                        <img src={HTML} alt="HTML logo" />
                        <p>HTML5</p>
                    </div>
                    <div className={styles.cssDiv}>
                         <img src={CSS} alt="CSS logo" />
                         <p>CSS3</p>
                    </div>
                    <div className={styles.reactDiv}>
                         <img src={React} alt="React logo" />
                         <p>React</p>
                    </div>
                </div>
                <div className={styles.backendLogo}>
                    <div>
                        <img src={Python} alt="Python logo" />
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={Pandas} alt="Pandas logo" />
                        <p>Pandas</p>
                    </div>
                    <div>
                        <img src={Flet} alt="Flet logo" />
                        <p>Flet</p>
                    </div>
                </div>
                <div className={styles.techLogo}>
                    <div>
                        <img src={GitHub} alt="GitHub logo" />
                        <p>GitHub</p>
                    </div>
                    <div>
                        <img src={VSC} alt="Visual Studio Code logo" />
                        <p>VSC</p>
                    </div>
                    <div>
                        <img src={Git} alt="Git logo" />
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </section>
    )
}