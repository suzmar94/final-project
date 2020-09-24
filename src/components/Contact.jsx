import React from "react";

const Contact = () => {
  return (
    <div className="container d-flex flex-column contact">
      <p className="contact-us">Contact us</p>
      <br />

      <p className="border-bottom">You can reach us here</p>

      <div className="span">
        <span>By phone at: +381 69 00 000</span>
        <br />
        <span>By email at: info@elrincondesusi.org</span>
      </div>

      <br />
      <p className="border-bottom">Customer Service hours:</p>

      <div className="span">
        <span>Monday to Friday, 9am to 13pm</span>
      </div>
    </div>
  );
};

export default Contact;
