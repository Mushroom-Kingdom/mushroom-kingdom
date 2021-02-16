import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import AuthenticationContext from "../contexts/AuthenticationContext";
import './css/login.css';


function Login (){
    //Authentication system requires here
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useContext(AuthenticationContext);

    async function login(event) {
      event.preventDefault();

      const userCredentials = {
        email: email,
        password: password
      }

      try {

        auth.login(userCredentials);

      }catch(err){
        
        console.error(err);
      }
    }

    return(
        <div className="login general-form">
          <h1 className="text-center mb-4">Log In</h1>
        <Form onSubmit={login}>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="Email" 
                placeholder="email@example.com" 
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required={true}
              />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"  
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required={true}
              />
            </Form.Group>
            {/*<Form.Group controlId="remember-me">
                <Form.Check 
                    type="checkbox"
                    label="Remember Me"
                />
              </Form.Group>*/}
            <Button variant="primary" type="submit" block>Submit</Button>
            <div style={{overflow:"hidden"}}>
                <p className="forgot-password text-left">
                        Don't have an <a href="/signup"> account?</a>
                </p>
                <p className="forgot-password text-right">
                        Forgot your <a href="/forgot-password"> password?</a>
                </p>
            </div>
          </Form>
        </div>
    )
}

export default Login;