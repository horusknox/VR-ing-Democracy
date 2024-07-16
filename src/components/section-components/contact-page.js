import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_rj3uu4b', 'template_wibrygk', form.current, {
      publicKey: '370BZ8SVJW0pwGZ9k',
    })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Sent the message successfully! Thank you for contacting us.");
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div>
      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-two__content">
                <div className="contact-two__block">
                  <h3>Don't Hesitate To Contact Us</h3>
                  <p>Our team will get back to you ASAP.</p>
                </div>
                <ul className="list-unstyled contact-two__info-list">
                  <li>
                    <div className="contact-two__info-list-title">
                      <i className="far fa-envelope" />
                      Email Us :
                    </div>
                    <p><a href="mailto:vringdemocracy@gmail.com">vringdemocracy@gmail.com</a></p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <form ref={form} onSubmit={handleSubmit} className="contact-two__form">
                <div className="contact-two__block">
                  <h3>Get In Touch</h3>
                  <p>We're waiting to hear from you!</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="from_name" placeholder="Full Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="from_email" placeholder="Email Address" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" placeholder="Message" required defaultValue={""} />
                    <button type="submit" className="thm-btn contact-two__btn">Send Message <i className="fa fa-angle-double-right" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
