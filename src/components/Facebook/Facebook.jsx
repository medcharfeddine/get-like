import React from "react";
import FacebooK from "../../assets/facebook.png";

const Facebook = () => {
  const isAndroid = /Android/.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  return (
    <div className="socials">
      {isAndroid && <a
        href="fb://page/924897634241785"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image" src={FacebooK} alt="facebook" />
        <h1>Facebook</h1>
      </a>}
      {isIOS && <a
        href="fb://profile/924897634241785"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image" src={FacebooK} alt="facebook" />
        <h1>Facebook</h1>
      </a>}
    </div>
  );
};

export default Facebook;
