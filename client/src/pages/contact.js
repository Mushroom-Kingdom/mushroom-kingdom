import React, {useState} from 'react';
import './css/contact.css';
import { Button, Form } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function HandleSubmit(e){
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
  }

  return (
      <div className="Contact">
          <Form onSubmit={HandleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="Name" 
                placeholder="Eg. John" 
                onChange={e => setName(e.target.value) }
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="Email" 
                placeholder="email@example.com" 
                onChange={e => setEmail(e.target.value) }
              />
            </Form.Group>
            <Form.Group controlId="Message">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" 
                rows={3} 
                onChange={e => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
      </div>
  )
}

export default Contact;

