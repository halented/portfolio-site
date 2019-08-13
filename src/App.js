import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './comps/Homepage';
import ClickIn from './comps/ClickIn';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
// import Silly from './comps/Silly';
import Resume from './comps/Resume';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path='/' component={ClickIn}/>
              <Route exact path='/home' component={Homepage}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/contact' component={Contact}/>
              {/* <Route exact path='/other' component={Silly}/> */}
              <Route exact path='/resume' component={Resume}/>
            </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
