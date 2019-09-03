import React, { Component } from 'react';
import Popup from "reactjs-popup";
import ClientUpdate from './ClientUpdate';
import '../../styles/clients.css'



class Client extends Component {

  
    render(){
        // console.log(this.props.Client)
        const Client=this.props.Client
        return(
            
            <Popup trigger={
            <tr className="tr">
                    <td>{Client.name}</td>
                    <td>{Client.emailType}</td>
                    <td>{Client.country}</td>
                    <td>{Client.firstContact}</td>
                    <td>{Client.sold? "sold" : "not sold"}</td>
                    <td>{Client.owner}</td>
            </tr>
            }><div><ClientUpdate country={Client.country} name={Client.name} smallUpdateClient={this.props.smallUpdateClient}/></div></Popup>
           
        )
    }
}


export default Client;




