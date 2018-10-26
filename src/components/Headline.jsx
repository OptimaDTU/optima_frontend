import React from "react";

import banner from "../assets/img/banner_n_2.jpg";

const Headline = () => {
  return (
    <div className="jumbotron jumbotron-fluid p-0 h-50">
      <img src={banner} style={{ width: "100%", opacity: "0.6" }} />
    </div>
  );
};

export default Headline;
