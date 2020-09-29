import React, { Component } from 'react';
import axios from 'axios';
import classes from './C__Main.module.css';
import Map from './Map/Map';
import Rankings from './Rankings/Rankings';
import Spinner from '../../../assets/Spinner/Spinner';

class CGFU__Main extends Component{
    
    state = {
        error: false,
        loading: true,
        arrayOfSectorInfo: [],
    }
    componentDidMount(){
        //Make Axios request for setting State of ::ArrayOfSectorInfo::
        axios.get('https://react-my-burger-ecca4.firebaseio.com/sector_Info.json')
             .then(response=>{
                 this.setState({
                     arrayOfSectorInfo: response.data,
                     loading: false,
                 });
             })
             .catch(error=>{
                console.log(error);
                this.setState({loading: false,error: true});
             });
    }
    render(){
        return(
            <div className = {classes.CGFU__Main}>
                <div className = {classes.Main_title}><div className = {classes.Title_text}>CGFU</div></div>
                <div className = {classes.Main_wrapper}>
                    <div className = {classes.Main_Map} >
                        <Map />
                    </div>
                    <div className = {classes.Main_Rankings}>
                        {this.state.loading ? <Spinner />: 
                        this.state.arrayOfSectorInfo.map((obj,ind)=>{
                            return <Rankings key = {obj.sector + ind} localityProps = {obj.localityInfo} sector = {obj.sector} rank = {ind+1} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default CGFU__Main;