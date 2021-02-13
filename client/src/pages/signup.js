import React from 'react';
import {Button, Form} from 'react-bootstrap';

function Signup(){
    return (
        <div className="sign-up general-form">
            <Form>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your first name" 
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your last name"  
                    />
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="Email" 
                        placeholder="email@example.com" 
                    />
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type="Password"  
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block>Register</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
          </Form>
        </div>
    )
}

export default Signup;