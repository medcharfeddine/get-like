import React from "react";

const App = () => {
  return (
    <div>
      <img
        src="https://www.get.com.tn/frontend/img/logo-Get.png"
        alt="logo"
      />
      <h2>Follow Us</h2>
      <div id="like">
        <div
          class="fb-like"
          data-href="https://www.facebook.com/GET.Fashion"
          data-width="300"
          data-layout=""
          data-action=""
          data-size="large"
          data-share="false"
          style={{ color: "aliceblue" }}
        ></div>
      </div>
      <div>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0&appId=737480571558324"
          nonce="hSGvKLLb"
        ></script>
      </div>
    </div>
  );
};

export default App;
