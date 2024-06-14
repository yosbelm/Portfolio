import Moon from "../../src/assets/Moonblack.png"
import styles from './HeaderStyles.module.css'

export const Header = () => {
    return (
        <div className={styles.headernav}>
            <div id= "#nav" className={styles.nav}>
                <div><a href="#proyects" className={styles.atrib}>Proyects</a></div>
                <div ><a href="#skills" className={styles.atrib}>Skills</a></div>
                <div><a href="#about" className={styles.atrib}>About me</a></div>
                <div><a href="#contact" className={styles.atrib}>Contact</a></div>
                <img src={Moon} alt="Moon switch" className={styles.atribMoon}/>
            </div>
        </div> 
    
    )
}
       