import './Navigation.css';

import Input from './Input';

const Navigation = props => {
    return (
        <nav className="nav">
            <img src="/logoD.png" alt="Logo"/>
            <div className="login-section">
                <Input name="email" type="email" />
                <Input name="password" type="password" />
                <input type="submit" className="loginBtn" value="login"/>
            </div>
        </nav>
    )
};

export default Navigation;