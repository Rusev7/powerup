import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <form className='register-form'>
            <div className="inputs-container">
                <h2 className="register-heading">Register</h2>

                <label htmlFor="username" className="register-label">Username:</label>
                <input type="text" name="username" id="username" className="register-input" />

                <label htmlFor="email" className="register-label">Email:</label>
                <input type="email" name="email" id="email" className="register-input" />

                <label htmlFor="password" className="register-label">Password:</label>
                <input type="password" name="password" id="password" className="register-input" />

                <label htmlFor="passwordRep" className="register-label">Repeat password:</label>
                <input type="password" name="passwordRep" id="passwordRep" className="register-input" />
            </div>
            
            <div className="button-container">
                <button type="submit" className='register-btn register-btn-wide'>Go</button>
            </div>
        </form>
    )
};

export default RegisterForm;