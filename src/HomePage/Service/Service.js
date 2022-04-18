import React from "react";
import { Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { img, name, price, description } = service;
  return (
    <Card className="mx-5">
      <Card.Img variant="top" src={img} className="img-fluid" height={30} />
      <Card.Body className="bg-dark text-white pt-4">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-dark text-center">
        <button className="btn btn-primary px-5">ADD</button>
      </Card.Footer>
    </Card>
  );
};

export default Service;
