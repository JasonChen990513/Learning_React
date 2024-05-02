import { useState } from "react";
import Modal from "../components/modal";
import Button from "../components/button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(!showModal);
    };

    const handleClose = () =>{
        setShowModal(false);
    };

    const actionBar = <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>;
    const modal =  <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            here is some important information
        </p>
    </Modal>;

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal} 
        </div>
    )
}



export default ModalPage;