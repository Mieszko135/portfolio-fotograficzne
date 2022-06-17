import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import smile from "../../images/smile.svg";
import { validate } from "../validate";

export function ContactUs() {

    const [values, setValues] = useState({name: "", email: "", subject: "", message: ""});
    const [errorMessages, setErrorMessages] = useState(null);
    const [mailSend, setMailSend] = useState(null);
    const [sendInfoClass, setSendInfoClass] = useState("mail-send-info hide-info")

    function handleChange(e) {
        const {name, value} = e.target;

        setValues(prevValues => {
            return {
                ...prevValues, 
                [name]: value
            }
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const errorMessage = validate(values);

        setErrorMessages(errorMessage);

        if (errorMessage) return;

        emailjs.sendForm('service_6ybt1bh', 'template_7wc74jk', e.target, 'a4wPFQftLtQ-6-FwX')
          .then(() => {
              setMailSend("Wiadomość wysłana pomyślnie");
              setSendInfoClass("mail-send-info");
          }, () => {
              setMailSend("Błąd! Wiadomość nie została wysłana, spróbuj ponownie");
              setSendInfoClass("mail-send-info");
          });
        
          setValues({name: "", email: "", subject: "", message: ""});
    };

    return (
        <section className="contact-container">
            <div className="contact-description"><h2 className="contact-description__header">Skontaktuj się ze mną</h2><p className="contact-description__text">Jeśli jesteś zainteresowany współpracą, albo chciałbyś kupić, któreś zdjęcie lub po prostu chcesz porozmawiać o fotografii napisz poprzez poniższy formularz</p><img className="smile-emoticon" src={smile} alt="uśmiechnięta buźka"/></div>
            <div className="contact-form">
                <div className={sendInfoClass}>{mailSend} <span className="close-button" onClick={() => {
                    setMailSend(null);
                    setSendInfoClass("mail-send-info hide-info")}}>x
                    </span>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="error-message">{errorMessages?.name}</div>
                    <div className="responsive-form"><input type="text" className="form-control" placeholder="Imię" name="name" value={values.name} onChange={handleChange}/></div>
                    <div className="error-message">{errorMessages?.email}</div>
                    <div className="responsive-form"><input type="email" className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={handleChange}/></div>
                    <div className="error-message">{errorMessages?.subject}</div>
                    <div className="responsive-form"><input type="text" className="form-control" placeholder="Temat" name="subject" value={values.subject} onChange={handleChange}/></div>
                    <div className="error-message">{errorMessages?.message}</div>
                    <div className="responsive-form"><textarea className="form-control" cols="60" rows="8" placeholder="Twoja wiadomość..." name="message" value={values.message} onChange={handleChange}/></div>
                    <div className="responsive-form"><input type="submit" className="form-btn" value="Send Message"/></div>
                </form>
            </div>
        </section>
    )
}