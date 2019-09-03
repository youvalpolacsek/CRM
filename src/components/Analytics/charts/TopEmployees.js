import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class TopEmployeeChart extends Component {
    constructor() {
        super()
        this.state={
            owners : []
        }
        //...use props.whatever here
    }

    getTopThree =  () => {
        let clients = this.props.Clients
        let owners = clients.reduce((ownersSoFar, { owner, name }) => {
            if (!ownersSoFar[owner]) ownersSoFar[owner] = [];
            ownersSoFar[owner].push(name);
            return ownersSoFar
        }, {})
        let newArr = []
        let keys = Object.keys(owners)
        for (let key of keys) {

            newArr.push({ name: key, Clients: owners[key].length })
        }

        newArr.sort(function (a, b) {
            return b.Clients - a.Clients;
        });
        let ownersArr = []
        ownersArr.push(newArr[0], newArr[1], newArr[2])
        return (ownersArr)
        //  this.setState({
        //     owners: ownersArr
        // })
    }

    render() {
       
        console.log(this.getTopThree())
        return (
            <div>
                <h3>Top Employees</h3>
            
                <BarChart
                    width={500}
                    height={300}
                    data={this.getTopThree()}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Clients" fill="#8884d8" />
                </BarChart>

            </div>
        )
    }
}



export default TopEmployeeChart