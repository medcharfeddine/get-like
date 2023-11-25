import React from "react";
import FacebooK from "../../assets/facebook.png";

const Facebook = () => {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/GET.Fashion"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image" src={FacebooK} alt="facebook" />
      <h1>Facebook</h1>
      </a>
    </div>
  );
};

export default Facebook;
