import React from 'react';
import {Route} from 'react-router-dom';
import Lintt from '../../assets/Lintt/Lintt';
import CovidDashboard from '../../containers/CovidDashboard/CovidDashboard';
import InfoBar from '../../containers/InfoBar/InfoBar';
import classes from './CovidInfo.module.css';

const covidInfo = ()=>{
    return(
        <section className = {classes.CovidInfo}>
            <div className = {classes.CovidDiv}>
                <Route path = "/" component = {CovidDashboard} />
            </div>
            <div className = {classes.InfoDiv}>
            {/* Extra Navigation Stuff to Be inserted in this div */ }
                <div className = {classes.InfoDiv__extraNavs}>
                    
                </div>
                <div className = {classes.Lintt}><Lintt /></div>

                <Route path = "/" component = {InfoBar} />
            </div>
        </section>
    );
}

export default covidInfo;