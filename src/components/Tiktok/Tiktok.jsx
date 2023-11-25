import React from "react";
import TiktoK from "../../assets/AdobeStock-JFfv5IQ2y7.jpg";
const Tiktok = () => {
  return (
    <div className="socials">
      <a
        href="https://www.tiktok.com/@getunisie"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image" src={TiktoK} alt="tiktok" />
      <h1>Tiktok</h1>
      </a>
    </div>
  );
};

export default Tiktok;
