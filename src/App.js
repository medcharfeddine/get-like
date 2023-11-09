import React from "react";
import "./App.css"

const App = () => {
  const style = {
    border : "none",
    overFlow: "hidden"
  }
  return (
    <div className="App">
      <div class="container">
        <img
          src="https://www.get.com.tn/frontend/img/logo-Get.png"
          alt="logo"
        />
        <h2>Follow Us</h2>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FGET.Fashion&width=300&layout&action&size&share=false&height=35&appId=737480571558324" width="300" height="35" style={style} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  );
};

export default App;
