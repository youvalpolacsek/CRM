import React, { Component } from 'react';
import {FaGlobeAmericas} from 'react-icons/fa'


class CountryBadge extends Component {




    render(){
        return(
            <div>
            <div style={{marginLeft:"9%"}}>
                <FaGlobeAmericas style={{fontSize:"2em", padding: "5px", backgroundColor:"red", borderRadius: "25px"}} />
            </div>
                country badge
             </div>
        )
    }
}



export default CountryBadge