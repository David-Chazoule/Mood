import React from 'react';
import './PopUpContact.css';

function PopUpContact(props) {
  return props.trigger ? (
    <div className="popup center">
      <div className="popup-inner">
        <div className="icon">
          <i className="check-mark">&#10003;</i>
        </div>
        <div className="title-pop">
          <h1>Successfully send!</h1>
        </div>
        <br></br>
        <div className="description">
          <p>
            We have received your message and we will get back to you within 24 hours. <br></br> <br></br> Have you checked our new playlist yet?
          </p>
        </div>
        <br></br>
        <div className="dismiss-btn">
          <button className="dismiss-popup-btn" onClick={() => props.close(false)}>
            Close
          </button>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopUpContact;
