import Moon from "../../src/assets/moon.svg"
import styles from './HeaderStyles.module.css'
import { useTheme } from '../common/ThemeContext.jsx'
import Sun from "../../src/assets/sun.svg"

export const Header = () => {
    const { toggleTheme } = useTheme();
    const { theme } = useTheme();
    const modeIconSrc = theme === 'dark' ? Moon : Sun;
    
    return (
        <div className={styles.headernav}>
            <div id= "#nav" className={styles.nav}>
                <div><a href="#proyects" className={styles.atrib}>Proyects</a></div>
                <div ><a href="#skills" className={styles.atrib}>Skills</a></div>
                <div><a href="#about" className={styles.atrib}>About me</a></div>
                <div><a href="#contact" className={styles.atrib}>Contact</a></div>
                <div className={styles.atribModeDiv}>
                <img onClick={toggleTheme} src={modeIconSrc} alt="Moon switch" className={styles.atribMoon}/>
                </div>
            </div>
        </div> 
    
    )
}
       