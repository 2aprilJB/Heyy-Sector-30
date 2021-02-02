import React, {Component} from 'react';
import Corona from '../../../assets/SVGs/Corona.svg';
import classes from './BedOccupancy.module.css';
import axios from 'axios';
import Spinner from '../../../assets/Spinner/Spinner';

class BedOccupancy extends Component{
    state = {
        occupancyData: null,
        loaded: false
    }
    componentDidMount(){
        axios.get('https://react-my-burger-ecca4.firebaseio.com/other_Metrics/bed_Occupancy.json')
             .then(response=>{
                 this.setState({
                     occupancyData: response.data,
                     loaded: true
                 })
             })
             .catch(error=>{
                 console.log(error);
             });
    }
    render(){
        return(
            this.state.loaded?
            <div className = {classes.Container}>
                <div className = {classes.TotalDiv}>
                    <div className = {classes.Total}>
                        <h3>Total</h3>
                        <h4>{this.state.occupancyData.total}</h4>
                    </div>
                </div>
                <div className = {classes.OtherDiv}>
                    <div className = {classes.CovidIcons}>
                        <img style = {{width: '2rem',height: '2rem'}} src = {Corona} alt = "CoronaIcon"/>
                        <img style = {{width: '1rem',height: '1rem'}} src = {Corona} alt = "CoronaIcon"/>
                        <img style = {{width: '0.8rem',height: '0.8rem'}} src = {Corona} alt = "CoronaIcon"/>
                        <img style = {{width: '2.1rem',height: '2.1rem'}} src = {Corona} alt = "CoronaIcon"/>
                        <img style = {{width: '1.3rem',height: '1.3rem'}} src = {Corona} alt = "CoronaIcon"/>
                    </div>
                    <div className = {classes.OtherData}>
                        <div className = {classes.Occupied}>
                            <h3>Occupied</h3>
                            <h4>{this.state.occupancyData.occupied}</h4>
                        </div>
                        <div className = {classes.Vacant}>
                            <h3>Vacant</h3>
                            <h4>{this.state.occupancyData.vacant}</h4>
                        </div>
                    </div>
                </div>
            </div>
            :<Spinner/>
        );
    }
}

export default BedOccupancy;