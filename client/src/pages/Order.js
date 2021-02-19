import React from 'react';
import {Form, Button} from 'react-bootstrap';

function Order(){
    
    function submitMessage(e){
        e.preventDefault();
        console.log("submit here");
    }

    return(
        <Form className="order">
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="eg. John Wick" />
            </Form.Group>
            <Form.Group controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="MushroomList">
                <Form.Label>List of mushrooms available:</Form.Label>
                <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="Message">
                <Form.Label>Leave a messages</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Order