import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




class CountryChart extends Component {
    constructor(props) {
        super(props)
        this.props = {
            Clients: this.props.Clients
        }
    }





    render() {
        let Clients = this.props.Clients
        const ClientsByCountry = Clients.reduce((clientsSoFar, { country, name }) => {
            if (!clientsSoFar[country]) clientsSoFar[country] = [];
            clientsSoFar[country].push(name);
            return clientsSoFar;
        }, {});
        let newArr = []
        let keys = Object.keys(ClientsByCountry)
        for (let key of keys) {

            newArr.push({ name: key, Clients: ClientsByCountry[key].length })
        }

        return (
            <div>
                <h3>By Country</h3>
                <BarChart
                    width={500}
                    height={300}
                    data={newArr}
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



export default CountryChart