import React, { Component } from 'react';
import Badges from './badges/Badges';
import axios from 'axios'
import Charts from './charts/Charts'


class Analytics extends Component {
    constructor(){
        super()
        this.state={
            Clients: []
        }
    }
    
      async getClients() {
        return axios.get("http://localhost:8000/clients")
      }
    
      async componentDidMount() {
        const response = await this.getClients()
        this.setState({ Clients: response.data })
      }
    



    render(){
        return(
            <div>
                <h2 id="analyticsHeader" style={{fontfamily: 'Roboto', textAlign: "center"}}>Analytics</h2>
                <hr></hr>
                <Badges Clients={this.state.Clients}/>
                <hr></hr>
                <Charts Clients={this.state.Clients}/>
            </div>
        )
    }
}


export default Analytics;




