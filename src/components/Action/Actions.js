import React, { Component } from 'react';
import SearchAction from './SearchAction';
import AddAction from './AddAction';
import UpdateAction from './UpdateAction';
import axios from 'axios'
import '../../styles/actions.css'

class Actions extends Component {
constructor(){
    super()
    this.state={
        Clients:[],
        name: ""
    }
}

  addNewClient = async (newClient)=> {
    await axios.post("http://localhost:8000/clients", newClient, function(res){
    })
  }

  async getClientsForUpdate() {
    return axios.get("http://localhost:8000/clients")
    
}

async componentDidMount() {
    const response = await this.getClientsForUpdate()
    await this.setState({ Clients: response.data })
}


getClient = async (name) => {
    let oneClient = await axios.get(`http://localhost:8000/clients/${name}`)
    await this.setState({ Clients: oneClient.data })
    console.log(this.state.Clients)

}

updateClient =  (name, key, updateData) => {
    console.log(name)
    let data = {"name":name ,[key]: updateData}
     axios.put(`http://localhost:8000/clients/${name}`, data, function(req,res){
        res.end()
    })

}

  
    render(){
        return(
            <div id="actionContainer">
                <h2 id="actionHeader" style={{fontfamily: 'Roboto', textAlign: "center"}}>Actions</h2>
                <hr></hr>
                <div id="searchContainer"><SearchAction clientList={this.state.Clients} getClient={this.getClient}/></div>
                <div id="biggerContainer">
                <div id="updateContainer">
                {this.state.Clients.length ? <UpdateAction clientName={this.state.Clients[0].name} updateClient={this.updateClient}/> : null}
                </div>
                <div id="addContainer">
                <AddAction addNewClient={this.addNewClient}/>
                </div>
                </div>
            </div>
        )
    }
}


export default Actions;




