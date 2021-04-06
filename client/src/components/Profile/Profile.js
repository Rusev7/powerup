import { useState } from 'react';
import { useHistory } from 'react-router-dom';
 
import './Profile.css';
import Modal from '../Modal/Modal';
import ChangeInfoForm from './ChangeInfoForm';

const Profile = () => {
    const [modal, setModal] = useState({
        show: false,
        info: '',
    });

    const userData = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    if(!userData) {
        history.push('/');
        return null;
    }

    const username = userData.username;
    
    const containerClassName = modal.show ? 'modal-container-show' : 'modal-container-hide';

    return (
        <div className="profile-page-wrapper">
            <h3 className="profile-page-username">{username} - {userData.weight}kg - {userData.height}cm</h3>
            <div className="avatar-container">
                <img src="/avatar.png" alt="avatar" className="user-avatar"/>
                <button className="profile-page-btn" onClick={() => setModal({show: true, info: 'password'})}>change password</button>
                <button className="profile-page-btn" onClick={() => setModal({show: true, info: 'email'})}>change email</button>
                <button className="profile-page-btn" onClick={() => setModal({show: true, info: 'progress'})}>reset progress</button>
                <button className="profile-page-btn" onClick={() => setModal({show: true, info: 'personalInfo'})}>change profile picture and personal info</button>
            </div>
            <p className="profile-page-text">(hover on the avatar picture)</p>

            <div className={`modal-container ${containerClassName}`}>
                <Modal show={modal.show} handleClose={() => setModal({show: false, info: ''})}>
                    <ChangeInfoForm info={modal.info} handleClose={() => setModal({show: false, info: ''})} />
                </Modal>
            </div>

    
        </div>
    )
};

export default Profile;