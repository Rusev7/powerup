import './RegisterForm.css';

import { usernameValidation, passwordValidation, emailValidation, numberValidation } from '../../../validation/validation';

import { useState } from 'react';
import ErrorNotification from '../../ErrorNotification';
import { register } from '../../../services/authService';

const RegisterForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [step, setStep] = useState(1);

    const inputValidation = input => {
        if (!input.validated) {
            return setErrorMessage(input.errorMsg);
        } else {
            setErrorMessage(null);
            return true;
        }
    }

    const handleRegisterFormSubmit = e => {
        e.preventDefault();

        if (step === 1) {
            const { username, email, password, passwordRep } = e.target;

            const usernameValidated = usernameValidation(username.value);
            const emailValidated = emailValidation(email.value);
            const passwordValidated = passwordValidation(password.value);
            const passwordRepValidated = passwordRep.value;

            const inputsArr = [usernameValidated, emailValidated, passwordValidated];

            const inputsValidated = inputsArr.every(inputValidation);

            if (inputsValidated) {
                if (passwordValidated.input !== passwordRepValidated) {
                    setErrorMessage('Passwords doesn\'t match!')
                } else {
                    setErrorMessage(null);

                    setUserInfo({
                        username: usernameValidated.input,
                        email: emailValidated.input,
                        password: passwordValidated.input,
                        passwordRep: passwordRepValidated
                    })
                    setStep(2);
                }
            }

        } else {
            const { age, weight, height } = e.target;

            const ageValidated = numberValidation(age.value, 'Age');
            const heightValidated = numberValidation(height.value, 'Height');
            const weightValidated = numberValidation(weight.value, 'Weight');

            const inputsArr = [ageValidated, weightValidated, heightValidated];

            const inputsValidated = inputsArr.every(inputValidation);

            if(inputsValidated) {
                const data = Object.assign(userInfo, 
                    {
                        age: ageValidated.input, 
                        weight: weightValidated.input,
                        height: heightValidated.input
                    })

                register(data)
                    .then(res => res.json())
                    .then(res => {
                        if(res.message.errorMsg) {
                            setStep(1);
                            setErrorMessage(res.message.errorMsg);
                        } else {
                            console.log('success');
                        }
                         
                    })
                    
            }
        }



    };

    return (
        <form className='register-form' onSubmit={handleRegisterFormSubmit}>
            {step === 1 && <div className="inputs-container">
                <h2 className="register-heading">Register</h2>

                <label htmlFor="username" className="register-label">Username:</label>
                <input type="text" name="username" id="username" className="register-input" />

                <label htmlFor="email" className="register-label">Email:</label>
                <input type="email" name="email" id="email" className="register-input" />

                <label htmlFor="password" className="register-label">Password:</label>
                <input type="password" name="password" id="password" className="register-input" />

                <label htmlFor="passwordRep" className="register-label">Repeat password:</label>
                <input type="password" name="passwordRep" id="passwordRep" className="register-input" />

                <div className="register-error-container">
                    <ErrorNotification message={errorMessage} />
                </div>
            </div>}

            {step === 2 && <div className="inputs-container">
                <h2 className="register-heading">Register</h2>

                <label htmlFor="age" className="register-label">Age:</label>
                <input type="number" name="age" id="age" className="register-input" />

                <label htmlFor="height" className="register-label">Height:</label>
                <input type="number" name="height" id="height" placeholder="Your height in cm..." className="register-input" />

                <label htmlFor="weight" className="register-label">Personal weight:</label>
                <input type="number" name="weight" id="weight" placeholder="Your weight in kg..." className="register-input" />

                <div className="register-error-container">
                    <ErrorNotification message={errorMessage} />
                </div>
            </div>}

            <div className="button-container">
                <button type="submit" className='register-btn register-btn-wide'>{step === 1 ? 'next' : 'go'}</button>
            </div>


        </form>
    )
};

export default RegisterForm;