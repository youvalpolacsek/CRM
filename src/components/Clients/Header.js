import React, { Component } from 'react';
import '../../styles/clients.css'


class Header extends Component {



    render(){
        return(
            <tr id="tableHeader">
            <td>Client</td>
            <td>Email Type</td>
            <td>Country</td>
            <td>First Contact</td>
            <td>Sold</td>
            <td>Owner</td>
            </tr>
        )
    }
}


export default Header;




