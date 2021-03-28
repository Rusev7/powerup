import './Modal.css';

const Modal = ({
    handleClose,
    show,
    children,
}) => {
    const divClassName = show ? 'show-modal' : 'hide-modal';

    return (
        <div className={`modal ${divClassName}`}>
            <span className='modal-close-btn' onClick={handleClose}>&#10005;</span>
            {children}
        </div>
    )
}

export default Modal;