import { useState } from 'react';

import './RegisterSection.css';

import RegisterBtn from './RegisterBtn';
import Modal from '../Modal';

const RegisterSection = () => {
    const [modal, setModal] = useState(false);

    const containerClassName = modal ? 'modal-container-show' : 'modal-container-hide';

    return (
        <section className="reg-section">
                <div className="description-container">    
                    <p className="description-text">
                        Power<span className="description-logo">Up</span> is a personal fitness assistant, which will make your fitness journey more productive by tracking your progress. In order to use it, you have to register, so follow the button below. If you like it, please share my app with your friends!
                    </p>
                </div>

                <RegisterBtn handleOpen={() => setModal(true)} />

                <div className={`modal-container ${containerClassName}`}>
                    <Modal show={modal} handleClose={() => setModal(false)}>
                    </Modal>
                </div>
        </section>
    )
};

export default RegisterSection;