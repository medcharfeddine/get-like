import React from "react";
import YoutubE from "../../assets/youtube.png";

const Youtube = () => {
  return (
    <div className="socials">
      <a
        href="https://www.youtube.com/@GET-ki7po"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="image" src={YoutubE} alt="youtube" />
      <h1>Youtube</h1>
      </a>
    </div>
  );
};

export default Youtube;
