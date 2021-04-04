import './App.css';

import { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import CreateWorkout from './components/CreateWorkout';
import Workouts from './components/Workouts';
import Profile from './components/Profile';

 
function App() {
    const [loggedIn, setloggedIn] = useState(false);


    const handleLogin = bool => {
        if(bool) {
            setloggedIn(true);
        }
    }

    return (
        <div className="App">
            <Navigation handleLogin={handleLogin} loggedIn={loggedIn}/>
            <Switch>
                <Route path="/" exact>
                    <Home loggedIn={loggedIn}/>
                </Route>
                <Route path="/create-workout" component={CreateWorkout} />
                <Route path="/my-workouts" component={Workouts} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </div>
    );
}

export default App;