import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


 async function getSingleProduct() {
  const response = await fetch('http://127.0.0.1:8000/apis/products/2')
  const data = await response.json();
  console.log(data);
}

function ProductCard() {


  const [ data, setData ] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/apis/products/");
      const data = await response.json();

      setData(data);
    }

    fetchData();

  }, []);

  return (
    <div style={{ display: 'flex',  justifyContent: 'right'}}>
        { data.map( item => (
      <Card style={{ width: '17rem', height: '28rem' }} className="me-3 p-5">
          <Card.Img variant="top" src={`http://localhost:8000/uploads/image${1}.jpg`} style={{
            width: '11rem',
            borderRadius: '1rem',
            height: '15rem'
        }} />
          <Card.Body>
          <Card.Title>
          {item.name} 
          </Card.Title>
          <Card.Title>
          {item.price} Ghc
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary" onClick={getSingleProduct}>View Product</Button>
          </Card.Body>   
      </Card>
      ))}
    </div>
  );
}

export default ProductCard;


/*
{ data.map(item => (
  <p> {item.name} : {item.description} </p>
)) }
*/