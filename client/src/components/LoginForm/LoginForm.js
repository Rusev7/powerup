import { useState, useContext } from 'react';

import { login, checkEmail, resetPassword } from '../../services/authService';

import './LoginForm.css';
import ErrorNotification from '../ErrorNotification';
import OpenModalContext from '../../context/OpenModalContext';

const LoginForm = () => {
    const context = useContext(OpenModalContext);
    const handleLogin = context.handleLogin;

    const [errorMessage, setErrorMessage] = useState(null)
    const [display, setDisplay] = useState(true);
    const [displayPassword, setDisplayPassword] = useState(false);
    const [email, setEmail] = useState('');

    const handleLoginFormSubmit = e => {
        e.preventDefault();

        if (display) {
            const { email, password } = e.target;
            login({ email: email.value, password: password.value })
                .then(res => res.json())
                .then(res => {
                    if (res.type === 'error') {
                        setErrorMessage(res.message.errorMsg);
                    } else {
                        setErrorMessage(null)
                        localStorage.setItem('user', JSON.stringify(res.user));
                        handleLogin(true);
                    }
                });
        } else {
            if (displayPassword) {
                const { password, passwordRep } = e.target;

                if (password.value !== passwordRep.value) {
                    setErrorMessage('Passwords doesn\'t match!');
                } else {
                    resetPassword({ email, password: password.value })
                        .then(res => res.json())
                        .then(res => {
                            if (res.type === 'error') {
                                setErrorMessage(res.message.errorMsg);
                            } else {
                                setErrorMessage(null)
                                localStorage.setItem('user', JSON.stringify(res.user));
                                handleLogin(true);
                            }
                        })
                        .catch(err => {
                            setErrorMessage(err.message.errorMsg);
                        })
                }
            } else {
                const { email } = e.target;

                checkEmail(email.value)
                    .then(res => res.json())
                    .then(res => {
                        if (res.type === 'error') {
                            setErrorMessage(res.message.errorMsg);
                        } else {
                            setErrorMessage(null);
                            setEmail(email.value);
                            setDisplayPassword(true);
                        }
                    })
                    .catch(err => {
                        setErrorMessage(err.message.errorMsg);
                    })
            }

        }
    }

    return (

        <form className="login-form" onSubmit={handleLoginFormSubmit}>
            {display ?
                <>
                    <input type="email" name="email" className="login-form-input" placeholder="Type your email here..." />
                    <input type="password" name="password" className="login-form-input" placeholder="Type your password here..." />
                    <input type="submit" value="login" className="login-form-btn" />
                    <ErrorNotification message={errorMessage} />
                    <span className="login-form-text" onClick={() => setDisplay(false)}>Forgotten password? Click here!</span></>
                :
                <>
                    <h3 className="login-form-heading">Type your email and we'll reset your password</h3>
                    {displayPassword ?
                        <>
                            <input type="password" name="password" className="login-form-input" placeholder="Type your new password here..." />
                            <input type="password" name="passwordRep" className="login-form-input" placeholder="Type your new password here..." />
                        </>
                        :
                        <input type="email" name="email" className="login-form-input" />
                    }

                    <input type="submit" value="reset" className="login-form-btn" />
                    <ErrorNotification message={errorMessage} />
                </>}
        </form>
    )
};

export default LoginForm;

