import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, description } = service;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Card className="mx-5 shadow rounded">
      <Card.Img variant="top" src={img} className="img-fluid" height={30} />
      <Card.Body className="bg-light text-dark pt-4">
        <Card.Title>{name}</Card.Title>

        <Card.Text>COST: $ {price}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-light text-center">
        <button className="btn btn-primary px-5" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </Card.Footer>
    </Card>
  );
};

export default Service;
