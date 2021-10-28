import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from '../Dashboard';
import Weather from '../Weather';
import Quiz from '../Quiz';
import Team from '../Team';
import NavBar from '../../components/NavBar';

const Routes = () => {
    return (
        <Router>
            <NavBar />
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/weather" component={Weather}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/team" component={Team}/>
        </Router>
    )
}

export default Routes
