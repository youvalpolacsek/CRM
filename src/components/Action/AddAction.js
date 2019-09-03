import React, { Component } from 'react';



class AddAction extends Component {
constructor(){
    super()
    this.state={
        name:"",
        country:"",
        email:"",
        owner:"",
        firstContact: new Date()
    }
}

handleNameChange = (e) => {
    this.setState({
        name: e.target.value
    })
} 
handleCountryChange = (e) => {
    this.setState({
        country: e.target.value
    })
} 
handleEmailChange = (e) => {
    this.setState({
        email: e.target.value
    })
} 
handleOwnerChange = (e) => {
    this.setState({
        owner: e.target.value
    })
} 

addNewClient = () => {
    this.props.addNewClient(this.state)
}



    render(){
        return(
            <div>
            <h4 style={{textAlign: "center",fontSize:"1.5em", borderBottom:"solid", paddingBottom:"20px",paddingTop:"20px",marginTop:"0px", backgroundColor:"#079992"}}>Add New Client</h4>
            <div style={{marginLeft: "30px"}}>
            <span>name</span>
            <input id="nameInput" placeholder="name" value={this.state.name} onChange={this.handleNameChange}></input>
            </div>
            <div style={{marginLeft: "30px"}}>
            <span>country</span>
            <input id="countryInput" placeholder="country" value={this.state.country} onChange={this.handleCountryChange}></input>
            </div>
            <div style={{marginLeft: "30px"}}>
            <span>email</span>
            <input id="emailInput" placeholder="email" value={this.state.email} onChange={this.handleEmailChange}></input>
            </div>
            <div>
            <span style={{marginLeft: "30px"}}>owner</span>
            <input id="ownerInput" placeholder="owner" value={this.state.owner} onChange={this.handleOwnerChange}></input>
            </div >
            <button style={{marginLeft: "230px"}} onClick={this.addNewClient}>Add New Client</button>
            </div>
        )
    }
}


export default AddAction;
