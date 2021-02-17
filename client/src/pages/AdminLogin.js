import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import AuthenticationContext from "../contexts/AuthenticationContext";
import API from "../utils/API";
import './css/login.css';


function AdminLogin () {
  //Authentication system requires here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthenticationContext);

  async function adminLoginSubmitHandler(event) {
    event.preventDefault();

      const adminCredentials = {
        email: email,
        password: password,
    }

    try {

        let response = await API.loginAdmin(adminCredentials);
        if(response.status !== 201) {
            throw new Error(response.message);
        }
        
        auth.login(response.data.userID, response.data.isAdmin, response.data.token);

    } catch (err) {
        console.log(err);
    }
  }
    
      
  

    return(
        <div className="login general-form">
          <h1 className="text-center mb-4">Login Required</h1>
        <Form onSubmit={adminLoginSubmitHandler}>
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
            <Button variant="primary" type="submit" block>Submit</Button>            
          </Form>
        </div>
    )
};

export default AdminLogin;