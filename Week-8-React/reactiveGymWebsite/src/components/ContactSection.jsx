import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>CONTACT US</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="message-container">
          <div className="phone-container">
            <h6>
              Mobile Number &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
              Address
            </h6>
            <span>+135 773 321 4442&nbsp; &nbsp; &nbsp;demo@demo.com</span>
            <div className="input-container">
              <h3>Make An Appointment</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                rows="5"
                cols="50"
                name="text"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="googleMap">
          <iframe
              width="100%"
              height="300"
              style={{ border: '0' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/place/Kaleici+Marina/@36.8837038,30.70266,20z/data=!4m19!1m12!4m11!1m6!1m2!1s0x14c391401357461d:0xfd048371f16395ab!2sSel%C3%A7uk,+Ba%C5%9Fka+resturannt,+Kordon+Sk.+No:38,+07100+Yatliman%C4%B1%2FAntalya!2m2!1d30.702823!2d36.883427!1m3!2m2!1d30.7030324!2d36.8837866!3m5!1s0x14c39004fc9ddb65:0x4b1f80400f7f1bb7!8m2!3d36.8840235!4d30.7034003!16s%2Fg%2F1vypf3vf?entry=ttu"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;