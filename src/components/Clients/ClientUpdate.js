import React, { Component } from 'react';



class ClientUpdate extends Component {
constructor(){
    super()
    this.state={
        name: "",
        country: "",
    }
}

handleNameChange = (e) => {
    this.setState({
        name: e.target.value,
    })
} 
handleCountryChange = (e) => {
    this.setState({
        country: e.target.value
    })
} 

smallUpdateClient = () => {
    this.props.smallUpdateClient(this.state, this.props.name)
}

    render(){
        return(
            <div >
                <h4>client update</h4>
                <div>name: <input placeholder={this.props.name} value={this.state.name} onChange={this.handleNameChange}></input></div>
                <div>country: <input placeholder={this.props.country} value={this.state.country} onChange={this.handleCountryChange}></input></div>
                <button onClick={this.smallUpdateClient}>update</button>
            </div>
        )
    }
}


export default ClientUpdate;




