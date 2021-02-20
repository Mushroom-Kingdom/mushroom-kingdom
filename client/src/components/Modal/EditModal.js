import React, { useState } from 'react'
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';


function EditModal(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);



    return (
    <>
        <button onClick={() => setModalIsOpen(true)}>Open Modal</button>

        <Modal isOpen={modalIsOpen}>

        </Modal>
    </>
    )
}

export default EditModal;
