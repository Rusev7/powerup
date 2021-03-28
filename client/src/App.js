import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateWorkout from './components/CreateWorkout';
import Navigation from './components/Navigation';

function App() {
    return (
        <div className="App">
            <Navigation loggedIn={true}/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-workout" component={CreateWorkout} />
            </Switch>
        </div>
    );
}

export default App;