import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends Component {



    render() {
        return (
            <div id="navbar">
                <div id="header">
                    <h1>CRM</h1>
                </div>
                <div id="links">
                    <Link to="/clients"><span className="links">Clients</span>  </Link>
                    <Link to="/actions"><span className="links">Actions</span>  </Link>
                    <Link to="/analytics"><span className="links">Analytics</span>  </Link>
                </div>
            </div>
        )
    }
}



export default Navbar;