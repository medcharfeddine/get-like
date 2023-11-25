import React from "react";
import InstagraM from "../../assets/instagram.png";

const Instagram = () => {
  return (
    <div className="socials">
      <a
        href="https://www.instagram.com/get.tunisie/"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image" src={InstagraM} alt="instagram" />
      <h1>Instagram</h1>
      </a>
    </div>
  );
};

export default Instagram;
