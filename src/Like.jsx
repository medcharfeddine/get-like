import React from "react";
var Like = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <title>GET</title>
          <img src="https://www.get.com.tn/frontend/img/logo-Get.png" alt="logo" />
          <h2>Follow Us</h2>
          <div id="like">
            <div className="fb-like" data-href="https://www.facebook.com/GET.Fashion" data-width={300} data-layout data-action data-size="large" data-share="false" style={{color: 'aliceblue'}} />
          </div>
          {/* <button type="button" class="btn btn-primary"> <a style="text-decoration: none; color: aliceblue;" href="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FGET.Fashion&width=450&layout&action&size&share=false&height=35&appId=737480571558324"> Welcome </a> </button> */}
          <div>
            <div id="fb-root" />
          </div>
          {/* 
  <a  href="">Welcome</a> */}
        </div>
      );
    }
  });

  export default Like