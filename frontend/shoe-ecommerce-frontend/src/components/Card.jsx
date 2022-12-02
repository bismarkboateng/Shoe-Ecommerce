import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ width: '17rem', height: '28rem' }} className="me-3 p-5">
      <Card.Img variant="top" src="../images/first.jpeg" style={{
                    width: '11rem',
                    borderRadius: '1rem',
                    height: '15rem'
                }} />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
            Product description
        </Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;