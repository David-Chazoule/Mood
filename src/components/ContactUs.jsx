import React, { useState } from 'react';
import axios from 'axios';

import PopUpContact from './PopUpContact';

import './ContactUs.css';

function ContactUs() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactMessages, setContactMessages] = useState([]);

  function handleSubmit(f) {
    f.preventDefault();
    setButtonPopup(true);
    const contactsubmit = {
      name: contactName,
      email: contactEmail,
      messagec: contactMessage,
    };
    axios
      .post('http://localhost:5006/contact', { ...contactsubmit })
      .then(function () {
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        setContactMessages([...contactMessages, contactsubmit]);
      })
      .catch(function () {});
  }

  return (
    <div className="contactPage">
      <div className="containerForm">
        <form className="formContact" onSubmit={(f) => handleSubmit(f)}>
          <label htmlFor="label-name" className="label-name">
            Name
          </label>
          <input
            className="Name-comment"
            placeholder="name.."
            required
            type="text"
            value={contactName}
            onChange={(f) => setContactName(f.target.value)}
          />

          <label htmlFor="label-email" className="label-email">
            Email
          </label>
          <input
            className="Email-comment"
            placeholder="yourmail@mail.com.."
            required
            type="text"
            value={contactEmail}
            onChange={(f) => setContactEmail(f.target.value)}
          />

          <label htmlFor="label-comment" className="label-comment">
            Message
          </label>
          <textarea
            className="Message-comment"
            placeholder="write commentary.."
            required
            type="text"
            value={contactMessage}
            onChange={(f) => setContactMessage(f.target.value)}
          />

          <div className="openpopup">
            <button className="btn-sub">Submit</button>
            <div className="center">
              <PopUpContact trigger={buttonPopup} close={setButtonPopup}></PopUpContact>
            </div>
          </div>
        </form>
      </div>
      <div className="containerContact">
        <h2 className="contact-title">CONTACT ──── US</h2>
        <p className="contact-p">
          It is very important for us to keep in touch with <br /> you, so we are always ready to answer any <br /> question that interests you.
          Shoot!
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
