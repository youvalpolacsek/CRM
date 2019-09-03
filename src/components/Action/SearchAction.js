import React, { Component } from 'react';



class SearchAction extends Component {
constructor(){
    super()
    this.state={
        name:""
    }
}

    handleNameChange =  async (e) => {
         await this.setState({
            name: e.target.value
        })
    }
    
    getClient = () => {
        console.log(this.state.name)
     this.props.getClient(this.state.name)
    }

    

    render() {
        let clientList = this.props.clientList
        return (
            <div>
                <input style={{width: "200px"}}id="clientInput" placeholder="search client" name="client" list="clients" onInput={this.handleNameChange} value={this.state.name}/>
                <datalist id="clients">
                    {clientList.map(c=> 
                    <option  className="client"  value={c.name}>{c.name}</option>)}
                </datalist>
                <button onClick={this.getClient}>search</button>
            </div>
        )
    }
}


export default SearchAction;
