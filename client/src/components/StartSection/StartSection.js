import { useState, useEffect, useContext } from 'react';

import './StartSection.css';

import ScrollDown from './ScrollDown';
import LoginForm from '../LoginForm/LoginForm';
import Modal from '../Modal';

import OpenModalContext from '../../context/OpenModalContext';

const StartSection = ({
    handleScrollDown,
}) => {
    const openModal = useContext(OpenModalContext);

    const [modal, setModal] = useState(openModal);

    const containerClassName = modal ? 'modal-container-show' : 'modal-container-hide';

    useEffect(() => {
        setModal(openModal);
    }, [openModal])
    
    return (
        <section className="start-section">
            <ScrollDown handleScrollDown={handleScrollDown}/>
            {openModal ? <div className={`modal-container ${containerClassName}`}>
                    <Modal show={modal} handleClose={() => setModal(false)}>
                        <LoginForm />
                    </Modal>
                </div> : null}
        </section>
    )
}

export default StartSection;