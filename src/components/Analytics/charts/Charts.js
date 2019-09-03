import React, { Component } from 'react';
import CountryChart from './ByCountry'
import AcquisitionChart from './ClientAcquisition'
import SalesSinceChart from './SalesSince'
import TopEmployeeChart from './TopEmployees'
import '../../../styles/charts.css'


class Charts extends Component {




    render(){
        let Clients=this.props.Clients

        return(
            <div id="chartContainer">
            <div className="chart" style={{marginLeft: "30px"}}><CountryChart Clients={Clients} /></div>
            <div className="chart"><TopEmployeeChart Clients={Clients}/></div>
            </div>
        )
    }
}



export default Charts