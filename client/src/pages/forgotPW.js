import React, {useState} from 'react';
import API from "../utils/API";
import {Button, Form} from 'react-bootstrap';

function ForgotPW(){
    const [email, setEmail] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

    }

    return(
        <div className="login general-form">
          <h1 className="text-center mb-4">Log In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="Email">
              <Form.Label>Enter the email address associated with your account</Form.Label>
              <Form.Control 
                type="Email" 
                placeholder="email@example.com" 
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required={true}
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>Submit</Button>           
          </Form>
        </div>
    )
}

export default ForgotPW;