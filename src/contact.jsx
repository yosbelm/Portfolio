import ContactP from './assets/contact-logo.png'
import React from 'react';

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
        <section className="contact-section" id="contact">
            <div className='banner-contact'>
                <img className='img-contact' src={ContactP} alt="Contact icon" />
                <h2 className='contact-text'>Contact</h2>
            </div>
            <div>
                <h3 className='get-touch-text'>Get in touch</h3>
                <h3 className='contact-me-text'>Contact me</h3>
            </div>
            <div className="email-container">
                <div className='mail-exterior'>
                    <span className='email-text'>{email}</span>
                    <button className='button-copy-mail' onClick={copiarAlPortapapeles}>
                        <img src={ContactP} alt="" /> {/* Icono de copia */}
                    </button>
                </div>
                
            </div>

        </section>
    )
}