import React from "react";
import diarior from "../img/diarior.jpg";
import pillow from "../img/pillow.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Error404 = () => {
  return (
    <div>
      <img
        src={diarior}
        alt="Error 404"
        class="vh-100 w-100 d-sm-none d-md-block d-lg-block"
      />
      <img
        src={pillow}
        alt="Error 404"
        class="vh-100 w-100 d-sm-block d-md-none d-lg-none"
      />
    </div>
  );
};

export default Error404;
