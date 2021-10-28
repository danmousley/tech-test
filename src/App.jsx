import React from 'react';
import NavBar from './components/NavBar';
import Routes from './containers/Routes';
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './containers/Dashboard';
import Weather from './containers/Weather';
import Quiz from './containers/Quiz';
import Team from './containers/Team';

const App = () => {
  return (
    <>
      <Router>
        <section className={styles.nav}>
          <NavBar />
        </section>
        <section className={styles.content}>
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/weather" component={Weather}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/team" component={Team}/>
        </section>
      </Router>
    </>
  )
}

export default App
