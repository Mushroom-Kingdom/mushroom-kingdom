import API from "../../../utils/API";
import React, { useState, useContext } from "react";
import {Button, Form } from "react-bootstrap";
import AuthenticationContext from "../../../contexts/AuthenticationContext";

function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const auth = useContext(AuthenticationContext);

    const signupSubmitHandler = async event => {
        event.preventDefault();
        
        const newUserData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        }

        try {

            let response = await API.createUser(newUserData);
            
            if(response.status !== 201) {
                throw new Error(response.message);
            }
            
            auth.login(response.data.userID, response.data.isAdmin, response.data.token);

        } catch (err) {
            console.log(err);
        }        
        
    }

    return (
        <div className="sign-up general-form">
            <h1 className="text-center mb-4">Sign Up</h1>
            <Form onSubmit={signupSubmitHandler}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your first name"
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName}
                        required={true} 
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your last name" 
                        onChange={(event) => setLastName(event.target.value)} 
                        value={lastName}
                        required={true}
                    />
                </Form.Group>
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
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        required={true} 
                    />
                </Form.Group>
                <Form.Group controlId="Password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                        type="password" 
                        onChange={(event) => setPasswordConfirm(event.target.value)}
                        value={passwordConfirm}
                        required={true} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block>Register</Button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Log in</a>
                </p>
          </Form>
        </div>
    )
}

export default Signup;