import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import './css/login.css';

function Login (){
    //Authentication system requires here

    return(
        <div className="login general-form">
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
            <div style={{overflow:"hidden"}}>
                <p className="forgot-password text-left">
                        Don't have an <a href="/signup"> account?</a>
                </p>
                <p className="forgot-password text-right">
                        Forgot <a href="/forgot-password"> password?</a>
                </p>
            </div>
          </Form>
        </div>
    )
}

export default Login;