import LogoP from '../../src/assets/curlybrackets.png'
import Proyectimg from '../../src/assets/pediatricCalculator.jpeg'
import Chatimg from '../../src/assets/myChat.jpeg'
import GitHub from '../../src/assets/octocat1.png'
import Link64 from '../../src/assets/linkwhite.png'
import Python from '../../src/assets/python.png'
import Pandas from '../../src/assets/pandas.png'
import Flet from '../../src/assets/flet.png'
import Django from '../../src/assets/django.svg'
import JavaScript from '../../src/assets/jscript.svg'
import styles from './ProyectsStyles.module.css'
// logos
import LogoPDark from "../../src/assets/curlybracketsDark.png"
import DjangoRest from "../../src/assets/djangorest-original.svg"
import DjangoRest2 from "../../src/assets/django-rest2.svg"
import Vue from "../../src/assets/vuejs-original.svg"
import Boostrap from "../../src/assets/bootstrap-original.svg"
import Svelte from "../../src/assets/svelte-original.svg"
import MySQL from "../../src/assets/mysql-original.svg"
import React from "../../src/assets/react.png"
// Images
import tuKiosko from '../../src/assets/tukiosko.png'
import Pinkzebra from '../../src/assets/Pinkzebra.png'

import { useTheme } from "../common/ThemeContext"


export const PersonalProyects = () => {
    const { theme } = useTheme();
    const logoIconSrc = theme === 'dark' ? LogoPDark : LogoP;

    const projectsList = [
        {
            title: "tuKiosko",
            company: "Yosbel",
            description: "A platform for business owners to manage product inventory and generate referral links. Sales agents use a dedicated interface to track sales for their subscribed businesses. Streamline your sales network!",
            image: tuKiosko, 
            techStack: [DjangoRest2, React],
            link: "https://tukiosko.onrender.com/",
            code: "https://github.com/tuKiosko.git"
        },
        
    ];

    return(
        <section id="proyects" className={styles.proyectsSection}>
            <div className={styles.bannerProyects}>
                <img className={styles.imgLogop} src={logoIconSrc} alt="Logo de la programacion" />
                <h2 className={styles.proyectText}>Personal Projects</h2>
            </div>

            {projectsList.map((project, index) => (
                <div key={index} className={styles.proyectCalculator}>
                    <div className={styles.containerProyectImg}>
                        <img className={styles.proyectImage} src={project.image} alt={project.title} />
                        <div className={styles.proyectImageText}>
                            <div className={styles.techUsed}>
                                {project.techStack.map((tech, i) => (
                                    <img 
                                        key={i} 
                                        src={tech} 
                                        alt="Tech logo" 
                                        className={
                                            tech === Django ? styles.djangoLogo :
                                            tech === Vue ? styles.vueLogo : 
                                            tech === DjangoRest ? styles.djangoRestLogo : 
                                            tech === DjangoRest2 ? styles.djangoRestLogo : 
                                            tech === Boostrap ? styles.boostrapLogo : 
                                            tech === Svelte ? styles.svelteLogo :
                                            tech === MySQL ? styles.mysqlLogo : 
                                            tech === React ? styles.reactLogo : 
                                            (tech === JavaScript ? styles.jscriptLogo : 
                                            (tech === Flet ? styles.fletLogo : ''))
                                        } 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerProyectDescrip}>
                        <div>
                            <div className={styles.ppTexto}>
                                <h2 className={styles.proyectDescription}>{project.title}</h2>
                            </div>
                            {project.company && <h4 className={styles.proyectCompany} style={{opacity: 0.8, marginBottom: '10px', marginTop: '0px', fontWeight: 'normal'}}>{project.company}</h4>}
                            <p className={styles.proyectShortInfo} style={{paddingBottom: '10px'}}>
                                {project.description}
                            </p>
                        </div>
                        <div className={styles.buttonsPersonalProyectwithurl}>
                            {project.link && (
                                <button className={styles.buttonGithubCodewithurllink} onClick={()=> window.open(project.link, '_blank')}>
                                    <span className={styles.codeGithubButton}>
                                        <img className={styles.githubButton} src={Link64} alt="Link logo" />
                                        <p className={styles.textButton}>Link</p>
                                    </span>
                                </button>
                            )}
                            {project.code && (
                                <button className={styles.buttonGithubCodewithurl} onClick={()=> window.open(project.code, '_blank')}>
                                    <span className={styles.codeGithubButton}>
                                        <img className={styles.githubButton} src={GitHub} alt="Github logo" />
                                        <p className={styles.textButton}>Code</p>
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}