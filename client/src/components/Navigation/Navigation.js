import './Navigation.css';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { login } from '../../services/authService';

import Input from './Input';
import ErrorNotification from '../ErrorNotification';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false,
        }

        this.onHamburgerClickHandler = this.onHamburgerClickHandler.bind(this);
        this.onCloseBtnClickHandler = this.onCloseBtnClickHandler.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    handleScroll(e) {
        if(window.scrollY > 20) {
            document.querySelector('.nav').classList.add('nav-scroll');
        } else {
            document.querySelector('.nav').classList.remove('nav-scroll');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    onHamburgerClickHandler(e) {
        this.setState({menu: true});
    }

    onCloseBtnClickHandler(e) {
        this.setState({menu: false});
    }

    handleLoginFormSubmit(e) {
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

    render() {
        if(this.props.loggedIn) {
            return (
                <nav className="nav">
                    <NavLink to="/" className="nav-logo"><img src="/logoD.png" alt="Logo" onClick={this.onCloseBtnClickHandler}/></NavLink>

                        <div className="hamburger-container" onClick={this.onHamburgerClickHandler}>
                            <div className="hamburger"></div>
                        </div>

                        <div className={`menu ${this.state.menu ? 'menu-show' : 'menu-hide'}`}>
                            <div className="close-btn-container" onClick={this.onCloseBtnClickHandler}>
                                <div className="close-btn"></div>
                            </div>
                            <NavLink to="/my-workouts" activeClassName="nav-link-active" className="nav-link" onClick={this.onCloseBtnClickHandler}>my workouts</NavLink>
                            <NavLink to="/create-workout" activeClassName="nav-link-active" className="nav-link" onClick={this.onCloseBtnClickHandler}>create workout</NavLink>
                            <NavLink to="/profile" activeClassName="nav-link-active" className="nav-link" onClick={this.onCloseBtnClickHandler}>profile</NavLink>
                            <NavLink to="/logout" className="btn-red-small btn-align-down" onClick={this.onCloseBtnClickHandler}>logout</NavLink>
                        </div>
                </nav>
            )
        } else {
            

            return (
                <nav className="nav">
                   <NavLink to="/" className="nav-logo"><img src="/logoD.png" alt="Logo"/></NavLink>
                    <form className="right-section" onSubmit={this.handleLoginFormSubmit}>
                        <ErrorNotification message={this.state.errorMessage}/>
                        <Input name="email" type="email" />
                        <Input name="password" type="password" />
                        <input type="submit" className="btn-red-small btn-login" value="login"/>
                    </form>

                    
                </nav>
            )
        }
    }
};

export default Navigation;