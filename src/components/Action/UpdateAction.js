import React, { Component } from 'react';
import { async } from 'q';



class UpdateAction extends Component {
constructor(props){
    super(props)
    this.state={

        email: "",
        owner: "",
        sold: false
    }
}


handleEmailChange = async (e) => {
await this.setState({
    email: e.target.value
})
}

handleOwnerChange = async (e) => {
await this.setState({
    owner: e.target.value
})
}

handleSoldChange = async ()  => {
    await this.setState({
        sold: true
    })
}

updateEmail = () => {
this.props.updateClient(this.props.clientName, "emailType" ,this.state.email )
}

updateOwner = () => {
    this.props.updateClient(this.props.clientName, "owner" ,this.state.owner ) 
}

updateSold = () => {
    this.props.updateClient(this.props.clientName, "sold" ,this.state.sold ) 
}
    render() {
        return (
            <div>
                <h4 style={{textAlign: "center",fontSize:"1.5em", borderBottom:"solid", paddingBottom:"20px",paddingTop:"20px",marginTop:"0px", backgroundColor:"#079992"}}>Update</h4>
                <div style={{marginLeft: "30px"}}>
                    <span>transfer ownership to</span>
                    <input id="ownerInput" placeholder="new owner" onInput={this.handleOwnerChange} value={this.state.owner}></input>
                    <button onClick={this.updateOwner}>Transfer</button>
                </div>
                <div style={{marginLeft: "30px"}}>
                    <span>send email</span>
                    <input id="emailInput" placeholder="email type" onInput={this.handleEmailChange} value={this.state.email}></input>
                    <button onClick={this.updateEmail}>Send</button>
                </div>
                <div style={{marginLeft: "30px"}}>
                    <span>declare sale</span>
                    <input type="checkBox" onChange={this.handleSoldChange}></input>
                    <button onClick={this.updateSold}>Declare</button>
                </div>





            </div>
        )
    }
}


export default UpdateAction;
