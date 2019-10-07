import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import './App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients/Clients';
import Actions from './components/Action/Actions';
import Analytics from './components/Analytics/Analytics';


class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <div id="App">

          <Navbar />


          <Route path="/clients" exact render={() => <Clients />} />
          <Route path="/actions" exact render={() => <Actions />} />
          <Route path="/analytics" exact render={() => <Analytics />} />
        </div>
      </Router>
    )
  }


}



export default App;
