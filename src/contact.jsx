import ContactP from './assets/contact-logo.png'
import React from 'react';
import Copy from './assets/copy.png'

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
                {/* <h3 className='contact-me-text'>Contact me</h3> */}
            </div>
            <div className="email-container">
                <div className='mail-exterior'>
                    <section id='mail'>
                        <span className='email-text'>{email}</span>
                        <button className='button-copy-mail' onClick={copiarAlPortapapeles}>
                            <img src={Copy} className='copy-pic'/>
                        </button>
                    </section>
                    
                </div>
            </div>
            <form action="" className='mail-container'>
                <div className='email-field-not-button'>
                    <div className='email-field-text-div'>
                        <label htmlFor="name" hidden>Name</label>
                        <input className='email-field-text' type="text" placeholder='Name' required/>
                    </div>
                    <div className='email-field-email-div'>
                        <label htmlFor="email" hidden>Email</label>
                        <input className='email-field-email' type="email" placeholder='Email' required/>
                    </div>
                    <div className='email-field-message-div'>
                        <label htmlFor="message" hidden>Message</label>
                        <textarea className='email-field-message' type="text" placeholder='Message' required></textarea>
                    </div>
                </div>
                <div className='email-submit'>
                    <input className='email-submit-button' type="submit" placeholder='Submit'/>
                </div>
            </form>
                

        </section>
    )
}