import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import './css/login.css';

function Login (){
    return(
        <div className="login">
        <Form>
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
            <Form.Group controlId="remember-me">
                <Form.Check 
                    type="checkbox"
                    label="Remember Me"
                />
            </Form.Group>
            <Button variant="primary" type="submit" block>Submit</Button>
            <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
            </p>
          </Form>
        </div>
    )
}

export default Login;