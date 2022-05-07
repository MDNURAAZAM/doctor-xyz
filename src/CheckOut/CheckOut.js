import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServicesContext } from "../App";

const CheckOut = () => {
  const { productId } = useParams();
  const services = useContext(ServicesContext);
  const selectedProduct = services?.find((service) => productId == service.id);
  const { name, price, description } = selectedProduct;
  const navigate = useNavigate();
  const handleCheckout = () => {
    alert("Thanks for your order.");
    navigate("/home");
  };
  return (
    <div className="container mx-auto w-50 m-5">
      <h2 className="text-primary text-center m-5"> CHECKOUT</h2>
      <div className="service shadow rounded p-5 bg-light border-top">
        <h4>SERVICE : {name}</h4>
        <p>{description}</p>
        <p>Price : ${price}</p>
        <button className="btn btn-primary" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
