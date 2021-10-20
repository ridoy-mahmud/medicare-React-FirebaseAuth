
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const { id, name, img, discription } = props.service;
  return (
    <Col>
      <Card className='card p-3'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='card-body'>
          <Card.Title className='title text-primary'>{name}</Card.Title>
          <Card.Text className='text'>
            {discription}
          </Card.Text>
        </Card.Body>
        <Link to={`/detail/${id}`}>
          <span><Button className='mb-3 btn btn-primary'>Details</Button></span>
        </Link>
      </Card>
    </Col>




  );
};

export default Service;