import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Homepage from './comps/Homepage';
import ClickIn from './comps/ClickIn';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Resume from './comps/Resume';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={ClickIn}/>
              <Route path={process.env.PUBLIC_URL + '/home'} component={Homepage}/>
              <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
              <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact}/>
              <Route exact path={process.env.PUBLIC_URL + '/resume'} component={Resume}/>
        </Router>
      </div>
    );
  }
  
}

export default App;
