import BrainWhite from '../../src/assets/brainWhite.png'
import BrainDark from '../../src/assets/brain.png'
import JavaScript from '../../src/assets/jscript.svg'
import HTML from '../../src/assets/html.svg'
import CSS from '../../src/assets/css.svg'
import React from '../../src/assets/react.svg'
import Python from '../../src/assets/piton.png'
import Django from '../../src/assets/django.svg'
import Pandas from '../../src/assets/pandas.png'
import GitHub from '../../src/assets/github-skill-light.png'
import Git from '../../src/assets/git.svg'
import VSC from '../../src/assets/vsc.png'
import Flet from '../../src/assets/flet.png'
import LogoPDark from "../../src/assets/curlybracketsDark.png"
import DjangoRest from "../../src/assets/djangorest-original.svg"
import DjangoRest2 from "../../src/assets/django-rest2.svg"
import Vue from "../../src/assets/vuejs-original.svg"
import Bootstrap from "../../src/assets/bootstrap-original.svg"
import Svelte from "../../src/assets/svelte-original.svg"
import MySQL from "../../src/assets/mysql-original.svg"
import Linux from "../../src/assets/linux-original.svg"
import Docker from "../../src/assets/docker-original.svg"
import Postgres from "../../src/assets/postgresql.svg"
import Redis from "../../src/assets/redis-original.svg"
import Tailwind from "../../src/assets/tailwindcsssvg.svg"
import Next from "../../src/assets/nextjs.svg"
import AWS from "../../src/assets/aws.svg"
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
                <div className={styles.backendLogo}>
                    <div>
                        <img src={Python} alt="Python logo" />
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={Django} alt="Django logo" />
                        <p>Django</p>
                    </div>
                    <div>
                        <img src={DjangoRest} alt="Django Rest Framework logo"/>
                        <p>DRF</p>
                    </div>
                    <div>
                        <img src={Pandas} alt="Pandas logo" />
                        <p>Pandas</p>
                    </div>
                </div>

                <div className={styles.frontendLogo}>
                    <div className={styles.jsDiv}>
                        <img src={JavaScript} alt="Javascript logo" />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.reactDiv}>
                         <img src={React} alt="React logo" />
                         <p>React</p>
                    </div>
                    <div>
                        <img src={Next} alt="Next logo" />
                        <p>NextJS</p>
                    </div>
                    <div>
                        <img src={Vue} alt="Vue logo" />
                        <p>Vue</p>
                    </div>
                </div>

                <div className={styles.techLogo}>
                    <div>
                        <img src={Bootstrap} alt="Bootstrap logo" />
                        <p>Bootstrap</p>
                    </div>
                    <div>
                        <img src={Tailwind} alt="Tailwind logo" />
                        <p>TailwindCSS</p>
                    </div>
                    <div>
                        <img src={Docker} alt="Docker logo" />
                        <p>Docker</p>
                    </div>
                    <div>
                        <img src={Linux} alt="Linux logo" />
                        <p>Linux</p>
                    </div>
                </div>

                
                <div className={styles.techLogo}>
                    <div>
                        <img src={Postgres} alt="PostgreSQL logo" />
                        <p>PostgreSQL</p>
                    </div>
                    <div>
                        <img src={MySQL} alt="MySQL logo" />
                        <p>MySQL</p>
                    </div>
                    <div>
                        <img src={Redis} alt="Redis logo" />
                        <p>Redis</p>
                    </div>
                    <div>
                        <img src={AWS} alt="AWS logo" />
                        <p>AWS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}