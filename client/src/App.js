import './App.css';

import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import CreateWorkout from './components/CreateWorkout';
import Workouts from './components/Workouts';

function App() {
    return (
        <div className="App">
            <Navigation loggedIn={true}/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-workout" component={CreateWorkout} />
                <Route path="/my-workouts" component={Workouts} />
            </Switch>
        </div>
    );
}

export default App;