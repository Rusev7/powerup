import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-page-wrapper">
            <div className="avatar-container">
                <img src="/avatar.png" alt="avatar" className="user-avatar"/>
                <button className="profile-page-btn">change password</button>
                <button className="profile-page-btn">change email</button>
                <button className="profile-page-btn">change password</button>
                <button className="profile-page-btn">change profile picture</button>
            </div>
        </div>
    )
};

export default Profile;