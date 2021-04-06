import { login } from '../../services/authService';

import './LoginForm.css';

const LoginForm = () => {

    const handleLoginFormSubmit = e => {
        e.preventDefault();

        const { email, password } = e.target;

        login({email: email.value, password: password.value})
            .then(res => res.json())
            .then(res => {
                if(res.type === 'error') {
                    this.props.handleError(true, res.message.errorMsg)
                } else {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.props.handleLogin(true);
                }
                
            });
    }

    return (
        <form className="login-form">
            <input type="email" name="email" className="login-form-input" />
            <input type="password" name="password" className="login-form-input" />
            <input type="submit" value="login" className="login-form-btn" />
            <span className="login-form-text">Forgotten password? Click here!</span>
        </form>
    )
};

export default LoginForm;

