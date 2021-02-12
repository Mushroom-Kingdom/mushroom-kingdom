import React from 'react';
import './css/contact.css';
import { Button, Form } from 'react-bootstrap';

function Contact() {
  function HandleSubmit(e){
    e.preventDefault();
    console.log("testing")
  }

  return (
      <div className="Contact">
          <Form onSubmit={HandleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Eg. John" />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" placeholder="email@example.com" />
            </Form.Group>
            <Form.Group controlId="Message">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
      </div>
  )
}

export default Contact;

