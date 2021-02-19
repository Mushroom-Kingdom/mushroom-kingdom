import React, { useState } from "react";
import Modal from 'react-modal';
import FullList from './FullList.js'

function AdminProducts() {    

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (            
    <>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>

            <Modal isOpen={modalIsOpen}>
                <h3>Name of mushroom to go here</h3>
                <br/>                    <br/>
                <input placeholder="Name"></input>
                <br/>
                <br/>
                <textArea id="desc" placeholder="Description"></textArea>
                <br/>                    <br/>
                <input placeholder="Toxicity"></input>
                <br/>
                <br/>
                <input placeholder="Family"></input>
                <br/>
                <br/>
                <input placeholder="Genus"></input>
                <br/>
                <br/>
                <input placeholder="Species"></input>
                <br/>
                <br/>
                <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
                <button onClick={() => setModalIsOpen(false)}>Save Changes</button>
            </Modal>

            <FullList>
            </FullList>
            
    </>  

    )
}

export default AdminProducts;