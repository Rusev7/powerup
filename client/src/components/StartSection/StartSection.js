import { useState, useEffect } from 'react';

import './StartSection.css';

import ScrollDown from './ScrollDown';
import Modal from '../Modal';

const StartSection = ({
    handleScrollDown,
    error,
}) => {
    const [modal, setModal] = useState(error.err);

    const containerClassName = modal ? 'modal-container-show' : 'modal-container-hide';

    useEffect(() => {
        setModal(error.err);
    }, [error])
    
    return (
        <section className="start-section">
            <ScrollDown handleScrollDown={handleScrollDown}/>
            {error.err ? <div className={`modal-container ${containerClassName}`}>
                    <Modal show={modal} handleClose={() => setModal(false)}>
                    </Modal>
                </div> : null}
        </section>
    )
}

export default StartSection;