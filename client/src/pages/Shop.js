import React, {useState, useEffect} from "react";
import { Card, Button } from 'react-bootstrap';
import API from "../utils/API";
import './css/shop.css';

function Shop() {
    const [mushrooms, setMushrooms] = useState([]);

    useEffect(() => {
        API.getMushrooms().then(res => {
            setMushrooms(res.data);
        });
    }, []); 

    return (
        <div className="shop">       
            <div className="container">
                {mushrooms.map(mushroom => {
                    return (
                    <div className='container'>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={mushroom.image_url} width="100%" />
                        </div>
                        <div className="col-md-9">            
                            <Card className="text-center">
                                <Card.Header>{mushroom.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        {mushroom.description}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <div className="row">
                                        <div className="col-md-3">
                                        Toxic | {mushroom.toxic ? "YES" : "NO"}
                                        </div>
                                        <div className="col-md-3">
                                        Family | {mushroom.family}
                                        </div>
                                        <div className="col-md-3">
                                        Genus | {mushroom.genus}
                                        </div>
                                        <div className="col-md-3">
                                        Species | {mushroom.species} 
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                    </div>  
                    )
                })}
                
            </div>
        </div>            
    )
}

export default Shop;