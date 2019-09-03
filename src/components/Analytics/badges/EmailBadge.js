import React, { Component } from 'react';
import {FaEnvelope} from 'react-icons/fa'

class EmailBadge extends Component {




    render(){
        let Clients=this.props.Clients
        let AClients = Clients.filter(c=>c.emailType === "A")
        let BClients = Clients.filter(c=>c.emailType === "B")
        let CClients = Clients.filter(c=>c.emailType === "C")
        let ClientNumber = AClients.length + BClients.length + CClients.length
        return(
            <div>
            <div style={{marginLeft:"9%"}}>
                <FaEnvelope style={{fontSize:"2em", padding: "5px", backgroundColor:"green", borderRadius: "25px"}}/>
            </div>
            {ClientNumber} emails sent
            </div>


           
        )
    }
}



export default EmailBadge