import React, { Component } from 'react';
import CountryBadge from './CountryBadge'
import EmailBadge from './EmailBadge'
import NewClientBadge from './NewBadge'
import OutstandingBadge from './OutstandingBadge'
import '../../../styles/badges.css'

class Badges extends Component {



    render(){
        let Clients=this.props.Clients
        return(
            <div id="badgeContainer" style={{marginLeft:"9%"}}>
                <div className="badge"><NewClientBadge Clients={Clients}/></div>
                <div className="badge"><CountryBadge /></div>
                <div className="badge"><EmailBadge Clients={Clients} /></div>
                <div className="badge"><OutstandingBadge Clients={Clients} /></div>
            </div>
        )
    }
}



export default Badges