import React from "react";

const Works = ({ title, description }) => {
  return (
    <>
      <div id="home">
        <div className="launch">
          <div>
            <img
              id="slika"
              src="https://blog.macsales.com/wp-content/uploads/2019/10/ReducePDF-286x325.jpg"
              alt=""
            />
            <div id="opis">
              <p>{title}</p>
              <hr />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
