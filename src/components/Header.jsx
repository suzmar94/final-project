import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <nav id="nav">
        <Link to="/" className="navigacija">
        <b>EL RINCÓN DE SUSI</b>
          </Link>
          <Link to="/" className="navigacija">
            HOME
          </Link>
          <Link to="/works" className="navigacija">
            WORKS
          </Link>
          <Link to="/contacts" className="navigacija">
            CONTACT
          </Link>
        
        </nav>
  </>
    );
  };

  export default Header