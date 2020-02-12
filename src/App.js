import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './comps/Homepage';
import ClickIn from './comps/ClickIn';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import './App.css';

class App extends Component {

  render(){
    return (
      <HashRouter basename='/'>
        <div className="App">
                <Route exact path={process.env.PUBLIC_URL + '/'} component={ClickIn}/>
                <Route path={process.env.PUBLIC_URL + '/home'} component={Homepage}/>
                <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
                <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact}/>
        </div>
      </HashRouter>
    );
  }
  
}

export default App;
