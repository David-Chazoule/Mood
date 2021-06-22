import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <img
          className="imgfooter"
          src="https://media.discordapp.net/attachments/816334477898809355/832201529602998272/Screen_Shot_2021-04-15_at_12.30.45_PM.png"
          alt="logo"
        />

        <div className="box-reseau">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className="logoFb" src="https://img.icons8.com/wired/64/ffffff/facebook-new.png" alt="Facebook" title="Facebook" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className="logoInsta" src="https://img.icons8.com/wired/64/ffffff/instagram-new.png" alt="Instagram" title="Instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className="logoTwitter" src="https://img.icons8.com/wired/64/ffffff/twitter.png" alt="Twitter" title="Twitter" />
          </a>
        </div>
      </div>

      <p className="copyright">Copyright © 2021 Entreprise MOOD</p>
    </div>
  );
}

export default Footer;
