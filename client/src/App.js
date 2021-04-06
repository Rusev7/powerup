import './App.css';

import { useState, useEffect } from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import CreateWorkout from './components/CreateWorkout';
import Workouts from './components/Workouts';
import Profile from './components/Profile';

 
function App() {
    const [loggedIn, setloggedIn] = useState(false);
    const [error, setError] = useState({err: false, msg: ''});
    const history = useHistory();

    const user = localStorage.getItem('user');

    useEffect(() => {
        if(user) {
            setloggedIn(true);
        }
    }, [user]);

    const handleLogin = bool => {
        if(bool) {
            setloggedIn(true);
        }
    }

    const handleError = (bool, msg) => {
        if(bool) {
            setError({
                err: bool,
                msg,
            })
        }
    }

    return (
        <div className="App">
            <Navigation handleLogin={handleLogin} handleError={handleError} loggedIn={loggedIn}/>
            <Switch>
                <Route path="/" exact>
                    <Home loggedIn={loggedIn} error={error}/>
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