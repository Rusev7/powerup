import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
    return (
        <div className="App">
            <Navigation loggedIn={true}/>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default App;