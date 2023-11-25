import React from "react";
import Logo from "../../assets/get.png";

const Website = () => {
  return (
    <div className="socials">
      <a
        href="https://www.get.com.tn"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image1" src={Logo} alt="siteweb" />
        <h1>Site Web</h1>
      </a>
    </div>
  );
};

export default Website;
