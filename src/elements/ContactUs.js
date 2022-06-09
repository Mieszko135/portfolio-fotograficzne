import React from "react";
import emailjs from '@emailjs/browser';
import smile from "../images/smile.svg";

export function ContactUs() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6ybt1bh', 'template_7wc74jk', e.target, 'a4wPFQftLtQ-6-FwX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

    return (
        <section className="contact-container">
            <div className="contact-description"><h2 className="contact-description__header">Skontaktuj się ze mną</h2><p className="contact-description__text">Jeśli jesteś zainteresowany współpracą, albo chciałbyś kupić, któreś zdjęcie lub po prostu chcesz porozmawiać o fotografii napisz poprzez poniższy formularz</p><img className="smile-emoticon" src={smile} alt="uśmiechnięta buźka"/></div>
            <div className="contact-form">
                <form onSubmit={sendEmail}>
                    <div className="responsive-form"><input type="text" className="form-control" placeholder="Imię" name="name"/></div>
                    <div className="responsive-form"><input type="email" className="form-control" placeholder="E-mail" name="email"/></div>
                    <div className="responsive-form"><input type="text" className="form-control" placeholder="Temat" name="subject"/></div>
                    <div className="responsive-form"><textarea className="form-control" cols="60" rows="8" placeholder="Twoja wiadomość..." name="message"/></div>
                    <div className="responsive-form"><input type="submit" className="form-btn" value="Send Message"/></div>
                </form>
            </div>
        </section>
    )
}