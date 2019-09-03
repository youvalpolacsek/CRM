import React, { Component } from 'react';
import fontAwsome from '@fortawesome/fontawesome-free'
import {FaChartLine} from 'react-icons/fa'

class NewClientBadge extends Component {

    
    render(){
        let Clients=this.props.Clients
        let newClients = Clients.filter(c=>c.firstContact > "2018-08-01:00:00.00Z")
        let newClientsNumber = newClients.length
        
        return(
            <div>
                <div style={{marginLeft:"9%"}}>
                <FaChartLine style={{fontSize:"2em", padding: "5px", backgroundColor:"yellow", borderRadius: "25px"}} />
                </div>
                {newClientsNumber} new clients
            </div>
   
        )
    }
}



export default NewClientBadge