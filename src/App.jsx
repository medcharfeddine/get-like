import React from "react";
import "./App.css";
import Follow from "./assets/follow.png";
import Website from "./components/Website/Website";
import Facebook from "./components/Facebook/Facebook";
import Instagram from "./components/Instagram/Instagram";
import Youtube from "./components/Youtube/Youtube";
import Tiktok from "./components/Tiktok/Tiktok";

const App = () => {
  return (
    <div className="App">
      <div class="container">
        <img src={Follow} alt="follow us" style={{ width: "90%" }} />
        <h2>Follow Us</h2>
        <Website />
        <Facebook />
        <Instagram />
        <Youtube />
        <Tiktok />
      </div>
    </div>
  );
};

export default App;
