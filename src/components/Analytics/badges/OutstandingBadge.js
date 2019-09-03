import React, { Component } from 'react';
import {FaUsers} from 'react-icons/fa'


class OutstandingBadge extends Component {




    render(){
        let Clients=this.props.Clients
        let filterdClients = Clients.filter(c=>c.sold === false)
        let OutstandingNumber = filterdClients.length
        return(
            <div>
            <div style={{marginLeft:"15%"}}>
                <FaUsers style={{fontSize:"2em", padding: "5px", backgroundColor:"purple", borderRadius: "25px"}}/>
            </div>
            {OutstandingNumber} outstanding clients
            </div>
        )
    }
}



export default OutstandingBadge