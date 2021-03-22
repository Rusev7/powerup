import './RegisterBtn.css';

const RegisterBtn = ({
    handleOpen
}) => {
    return (
        <button onClick={handleOpen} className="register-btn">register now</button>
    )
}

export default RegisterBtn;