import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="btn-container">
            <a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-lg btn-ins"
              type="button"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <a
              href="https://en-gb.facebook.com/cuvanjepasabeograd/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-lg btn-fb"
              type="button"
              role="button"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a
              href="https://www.youtube.com/watch?v=bBDV1wOkGnE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-lg btn-yt"
              type="button"
              role="button"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
          <br />
          <div className="copyright">© 2020 Copyright: EL RINCÓN DE SUSI</div>
        </div>
      </footer>
    </>
  );
};

//

export default Footer;
