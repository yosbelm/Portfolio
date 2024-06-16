import LogoP from '../../src/assets/curlybrackets.png'
import Proyectimg from '../../src/assets/proyectimage.webp'
import GitHub from '../../src/assets/octocat1.png'
import Python from '../../src/assets/python.png'
import Pandas from '../../src/assets/pandas.png'
import Flet from '../../src/assets/flet.png'
import styles from './ProyectsStyles.module.css'
import LogoPDark from "../../src/assets/curlybracketsDark.png"
import { useTheme } from "../common/ThemeContext"


export const Proyects = () => {
    const { theme } = useTheme();
    const logoIconSrc = theme === 'dark' ? LogoPDark : LogoP;
    
    return(
        <section id= "proyects" className={styles.proyectsSection}>
            <div className={styles.bannerProyects}>
                <img className={styles.imgLogop} src={logoIconSrc} alt="Logo de la programacion" />
                <h2 className={styles.proyectText}>Proyects</h2>
            </div>
            <div className={styles.proyectCalculator}>
                <div className={styles.containerProyectImg}>
                        <img className={styles.proyectImage} src={Proyectimg} alt="" />
                    <div className={styles.proyectImageText}>
                        <div className={styles.techUsed}>
                            <img src={Python} alt="Python logo" />
                            <img src={Pandas} alt="Pandas logo" />
                            <img className={styles.fletLogo} src={Flet} alt="Flet logo" />
                        </div>
                    </div>
                </div>
                <div className={styles.containerProyectDescrip}>
                    <div>
                        <h2 className={styles.proyectDescription}>Pediatric Percentile Calculator</h2>
                        <p className={styles.proyectShortInfo}>
                        The Pediatric Percentile Calculator is an essential tool designed to offer quick and accurate assessments of a child's growth patterns, comparing their weight, height,<br />
                         and body composition against standardized percentiles. 
                        </p>
                    </div>
                    <div className={styles.buttonsProyect}>
                        <button className={styles.buttonGithubCode} onClick={()=> location.href = 'https://github.com/yosbelm/pediatric_percentile_calculator'}>
                            <span className={styles.codeGithubButton}>
                                <img className={styles.githubButton} src={GitHub} alt="Github logo" />
                                <p className={styles.textButton}>Code</p>
                            </span>
                        </button>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}