import React, { Component } from 'react';
import CovidDisplayModule from './CovidDisplayModule/CovidDisplayModule';
import classes from './CovidDashboard.module.css';

class CovidDashboard extends Component{
    state = {
        overall: [
            {type: 'active', value: 115, icon: 'fitness'},
            {type: 'confirmed', value: 655, icon: 'radio'},
            {type: 'deaths', value: 115, icon: 'skull'},
        ],
    }
//On Click of KNOW MORE
    toCGFU = ()=>{
        this.props.history.push('/CGFU');
    }

    render(){
        let displayModules = this.state.overall.map(mod=><CovidDisplayModule key = {mod.type + '$1'} description = {mod} />)
        return(
            <div onClick = {this.toCGFU} className = {classes.Dashboard}>
                <div className = {classes.Dashboard__main_wrapper}>
                    <div className = {classes.Covid_Header}>
                        COVID-19
                    </div>
                    <div className = {classes.Display}>
                        {displayModules}
                    </div>
                </div>
                <div className = {classes.FullCovidUpdate}>
                    <ion-icon name = "map" />
                    Know More
                </div>    
            </div>
        );
    }
}

export default CovidDashboard;