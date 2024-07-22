import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
function ModalPage(){
    const [isOpen, setIsOpen] = useState(false);
    const openModal = ()=>{
        setIsOpen(true);
    };

    const closeModal = ()=>{
        setIsOpen(false);
    };

    const action = ()=>{
        console.log("action");
        //write any action here...
        setIsOpen(false);
    };

    const actionBarElement = <div>
        <Button primary onClick={action}>I accept</Button>
    </div>

    return (
        <div>
            <Button onClick={openModal} primary>Open Modal</Button>
            {isOpen && <Modal actionBar={actionBarElement} onClose={closeModal}>
                <div>
                 It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less normal 
                 distribution of letters, as opposed to using 'Content here, 
                 content here', making it look like readable English. 
                 Many desktop publishing packages and web page editors now use 
                 Lorem Ipsum as their default model text, and a search for 
                 'lorem ipsum' will uncover many web sites still in their infancy. 
                 Various versions have evolved over the years, sometimes by accident, 
                 sometimes on purpose.
                </div>
            </Modal>}
        </div>
    );
}

export default ModalPage;