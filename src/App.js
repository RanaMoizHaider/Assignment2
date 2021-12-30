import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Switch>
                <Route exact to='/' component={Home} />
                <Route exact to='/login' component={Login} />
                <Route exact to='/signup' component={Signup} />
            </Switch>
        </>
    );
}

export default App;
