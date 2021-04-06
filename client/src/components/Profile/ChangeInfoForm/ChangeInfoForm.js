import './ChangeInfoForm.css';

import { updateData, resetProgress } from '../../../services/authService';
import { useState } from 'react';

import ErrorNotification from '../../ErrorNotification';

const ChangeInfoForm = ({
    info,
    handleClose
}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [userEmail, setUserEmail] = useState(user.email);
    const [personalInfoObject, setPersonalInfoObject] = useState({
        'weight': user.weight,
        'height': user.height,
        'age': user.age,
    })

    const [errorMessage, setErrorMessage] = useState(null);

    if(info === '') {
        return null;
    }

    const onEmailChangeHandler = e => {
        setUserEmail(e.target.value);
    };

    const onPersonalInfoChangeHandler = e => {
        let obj = {...personalInfoObject};
        let newObj = {
            [e.target.name]: e.target.value,
        }

        Object.assign(obj, newObj);

        setPersonalInfoObject(obj);
    }

    const email = () => {
        return (
            <input type="email" name="email" value={userEmail} onChange={onEmailChangeHandler} className="change-info-input"/>
        )

    }

    const password = () => {
        return (
            <>
            <input type="password" name="oldPassword" placeholder="old password here..." className="change-info-input"/>
            <input type="password" name="newPassword" placeholder="new password here..." className="change-info-input"/>
            <input type="password" name="newPasswordRep" placeholder="repeat new password here..." className="change-info-input"/>
            </>
        )

    }

    const progress = () => {
            return <h3 className="change-form-heading">Are you sure you want to reset your whole workout progress?</h3>
    }

    const personalInfo = () => {
        return (
            <>
                <label htmlFor="weight" className="change-form-label">Weight:</label>
                <input type="number" value={personalInfoObject.weight} onChange={onPersonalInfoChangeHandler} name="weight" className="change-info-input"/>

                <label htmlFor="weight" className="change-form-label">Height:</label>
                <input type="number" value={personalInfoObject.height} onChange={onPersonalInfoChangeHandler} name="height" className="change-info-input"/>

                <label htmlFor="weight" className="change-form-label">Age:</label>
                <input type="number" value={personalInfoObject.age} onChange={onPersonalInfoChangeHandler} name="age" className="change-info-input"/>
            </>
        )
    }

    const execObject = {
        'email': email,
        'password': password,
        'progress': progress,
        'personalInfo': personalInfo,
    } 

    const executed = execObject[info];

    const onChangeFormSubmit = e => {
        e.preventDefault();

        switch(info) {
            case 'email':
                const email = e.target.email;
                updateData({type: 'email', email: email.value}, user.id)
                    .then(res => {
                        setErrorMessage(null);
                        handleClose();
                    })
                    .catch(err => {
                        setErrorMessage('Something went wrong! Try again!');
                    });
                break;
            case 'password':
                const { oldPassword, newPassword, newPasswordRep } = e.target;
                
                if(newPassword !== newPasswordRep) {
                    setErrorMessage('New passwords doesn\'t match!')
                }

                updateData({oldPassword: oldPassword.value, newPassword: newPassword.value, type: 'password'}, user.id)
                    .then(res => res.json())
                    .then(res => {
                        if(res.type === 'error') {
                            setErrorMessage(res.message.errorMsg);
                        } else {
                            setErrorMessage(null);
                            handleClose();
                        }
                    })
                    .catch(err => {
                        setErrorMessage(err);
                    });

                break;

            case 'progress':
                resetProgress(user.id)
                    .then(() => {
                        handleClose();
                    })
                    .catch(err => {
                        setErrorMessage(err);
                    });
                break;
            case 'personalInfo':
                updateData({personalInfoObject, type: 'personalInfo'}, user.id)
                    .then(res => res.json())
                    .then(res => {
                        if(res.type === 'error') {
                            setErrorMessage(res.message.errorMsg);
                        } else {
                            localStorage.setItem('user', JSON.stringify(res.user));
                            setErrorMessage(null);
                            handleClose();
                        }
                    })
                    .catch(err => {
                        setErrorMessage(err);
                    })
                break;
            default:
                break;
        }
    }

    return (
        <form className="change-info-form" onSubmit={onChangeFormSubmit}>
            {executed()}
            <ErrorNotification message={errorMessage}/>
            <input type="submit" value={info === 'progress' ? 'reset' : `change info`} className="change-info-btn" />
        </form>
    )
};

export default ChangeInfoForm;