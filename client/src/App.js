import './App.css';

import { useState, useEffect } from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import CreateWorkout from './components/CreateWorkout';
import Workouts from './components/Workouts';
import Profile from './components/Profile';

import OpenModalContext from './context/OpenModalContext';

function App() {
    const [loggedIn, setloggedIn] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const history = useHistory();

    const user = localStorage.getItem('user');

    useEffect(() => {
        if (user) {
            setloggedIn(true);
        }
    }, [user]);

    const handleLogin = bool => {
        if (bool) {
            setloggedIn(true);
        }
    }

    const handleOpenModal = (bool) => {
        if (bool) {
            setOpenModal(bool)
        }
    }

    return (
        <div className="App">
            <Navigation handleOpenModal={handleOpenModal} loggedIn={loggedIn} />
            <Switch>
                <Route path="/" exact>
                    <OpenModalContext.Provider value={{openModal, handleLogin: handleLogin}}>
                        <Home loggedIn={loggedIn} />
                    </OpenModalContext.Provider>
                </Route>
                <Route path="/create-workout" component={CreateWorkout} />
                <Route path="/my-workouts" component={Workouts} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout">
                    {() => {
                        localStorage.removeItem('user');
                        setloggedIn(false);
                        history.push('/');
                        return null;
                    }}
                </Route>
            </Switch>
        </div>
    );
}

export default App;