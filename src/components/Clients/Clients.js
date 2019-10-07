import React, { Component } from 'react';
import Client from './Client';
import Header from './Header';
import axios from 'axios'
import '../../styles/clients.css'


class Clients extends Component {
constructor(){
    super()
    this.state={
        Clients: [],
        clientName: ""
    }
}

  async getClients() {
    return axios.get("http://localhost:8000/clients")
  }

  async componentDidMount() {
    const response = await this.getClients()
    this.setState({ Clients: response.data })
  }

  smallUpdateClient = async (data, client) => {
      await axios.put(`http://localhost:8000/clients/${client}`, data)
      const response = await this.getClients()
    this.setState({ Clients: response.data })
  }

  handleChange = (e) => {
    this.setState({
        clientName: e.target.value
    })
} 


    render(){
        const clients=this.state.clients
        return(
            <div>
               <h2 id="clientHeader" style={{fontfamily: 'Roboto'}}>Clients</h2>
                <hr></hr>
                <input type="text" placeholder="Client Name" value={this.state.clientName} onChange={this.handleChange}></input>
                <span>search for client</span>
                <table id="table">
                <Header />
                {this.state.Clients.filter(c=> c.name.toLowerCase().includes(this.state.clientName.toLowerCase())).map(c=> <Client key={c._id} Client={c} smallUpdateClient={this.smallUpdateClient}/>)}
                </table>
            </div>
        )
    }
}


export default Clients;




