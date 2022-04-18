import React from "react";
import image from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-sm-column flex-lg-row align-items-center justify-content-center">
        <div className="col-sm-12 col-lg-6 mt-5 order-2 order-lg-1">
          <h1>I'm Doctor ANY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse
            accusantium odit iste commodi veritatis, laudantium amet non
            accusamus totam, fugit deleniti atque quia! Tempore fugit suscipit
            ex mollitia quas, excepturi, iste doloremque quos accusantium,
            reiciendis quam beatae cupiditate. Eum explicabo quod quasi
            repellendus saepe, omnis harum sunt non. Omnis.
          </p>
        </div>
        <div className="col-sm-12 col-lg-6 order-1 order-lg-2">
          <img src={image} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
