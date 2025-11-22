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
import ecomimg from '../../src/assets/myEcommerce.jpg'
import TowitHouston from '../../src/assets/Towit.png'
import TDmeat from '../../src/assets/TDmeat.png'
import Gallerax from '../../src/assets/Gallerax.png'
import Pinkzebra from '../../src/assets/Pinkzebra.png'

import { useTheme } from "../common/ThemeContext"


export const Proyects = () => {
    const { theme } = useTheme();
    const logoIconSrc = theme === 'dark' ? LogoPDark : LogoP;

    const projectsList = [
        {
            title: "Eco-Friendly Fragrance Platform",
            company: "Pink Zebra | Remote",
            description: "Participated in the development of a platform focusing on creating API endpoints using Django REST Framework and integrating them with a Vue-based frontend. Used Django ORM to simplify and optimize database queries and collaborated with an agile development team.",
            image: Pinkzebra, 
            techStack: [Python, JavaScript, Django, DjangoRest2, Vue],
            link: null,
            code: null
        },
        {
            title: "Trailer Rental & Sales Platform",
            company: "Nitza Development | United States",
            description: "Contributed to the backend development for TowitHouston using Django, optimizing database queries with Django Debug Toolbar. Collaborated on frontend design tasks and adjustments using Bootstrap 5.",
            image: TowitHouston, 
            techStack: [Python, JavaScript, Django, Boostrap],
            link: null,
            code: null
        },
        {
            title: "Rooster Community Platforms",
            company: "Private Client | Dominican Republic",
            description: "Developed two complementary platforms enabling users to upload, view, and interact with videos. Implemented a live streaming feature with real-time comments. Built with Django, Bootstrap 5, and SQL.",
            image: Gallerax, 
            techStack: [Python, JavaScript, Django, Boostrap, MySQL],
            link: null,
            code: null
        },
        {
            title: "Meat Shop Management System",
            company: "TDMeat | United States",
            description: "Designed and developed a web platform for managing orders and sales. Implemented a payment system and customized dashboards for sellers, butchers, and delivery personnel. Built with Django, SQL, and React.",
            image: TDmeat, 
            techStack: [Python, JavaScript, Django, , React, MySQL],
            link: null,
            code: null
        },
        
    ];

    return(
        <section id="proyects" className={styles.proyectsSection}>
            <div className={styles.bannerProyects}>
                <img className={styles.imgLogop} src={logoIconSrc} alt="Logo de la programacion" />
                <h2 className={styles.proyectText}>Projects</h2>
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
                            <h2 className={styles.proyectDescription}>{project.title}</h2>
                            {project.company && <h4 style={{opacity: 0.8, marginBottom: '10px', marginTop: '0px', fontWeight: 'normal'}}>{project.company}</h4>}
                            <p className={styles.proyectShortInfo}>
                                {project.description}
                            </p>
                        </div>
                        <div className={styles.buttonsProyectwithurl}>
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