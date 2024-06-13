import ContactP from '../../src/assets/contact-logo.png'

import Copy from '../../src/assets/copy.png'
import styles from './ContactStyles.module.css'

export const ContactMe = () => {
    const email = "yosbelm99@gmail.com";

    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText(email)
        .then(() => {
            alert(`Correo copiado al portapapeles: ${email}`);
        })
        .catch(err => {
            console.error('Error al copiar el correo al portapapeles: ', err);
        });
    };

    return(
            <section className={styles.contactSection} id="contact">
            <div className={styles.bannerContact}>
                <img className={styles.imgContact} src={ContactP} alt="Contact icon" />
                <h2 className={styles.contactText}>Contact</h2>
            </div>
            <div>
                <h3 className={styles.getTouchText}>Get in touch</h3>
                {/* <h3 className={styles.contact-me-text'>Contact me</h3> */}
            </div>
            <div className={styles.emailContainer}>
                <div className={styles.mailExterior}>
                    <section id='mail'>
                        <span className={styles.emailText}>{email}</span>
                        <button className={styles.buttonCopyMail} onClick={copiarAlPortapapeles}>
                            <img src={Copy} className={styles.copyPic}/>
                        </button>
                    </section>
                    
                </div>
            </div>
            <form action="" className={styles.mailContainer}>
                <div className={styles.emailFieldNotButton}>
                    <div className={styles.emailFieldTextDiv}>
                        <label htmlFor="name" hidden>Name</label>
                        <input className={styles.emailFieldText} type="text" placeholder='Name' required/>
                    </div>
                    <div className={styles.emailFieldEmailDiv}>
                        <label htmlFor="email" hidden>Email</label>
                        <input className={styles.emailFieldEmail} type="email" placeholder='Email' required/>
                    </div>
                    <div className={styles.emailFieldMessageDiv}>
                        <label htmlFor="message" hidden>Message</label>
                        <textarea className={styles.emailFieldMessage} type="text" placeholder='Message' required></textarea>
                    </div>
                </div>
                <div className={styles.emailSubmit}>
                    <input className={styles.emailSubmitButton} type="submit" placeholder='Submit'/>
                </div>
            </form>
                

        </section>
    )
}