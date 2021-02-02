import React from 'react';
import {Route} from 'react-router-dom';
import Lintt from '../../assets/Lintt/Lintt';
import CovidDashboard from '../../containers/CovidDashboard/CovidDashboard';
import InfoBar from '../../containers/InfoBar/InfoBar';
import Upcoming from '../Upcoming/Upcoming';
import classes from './CovidInfo.module.css';

const covidInfo = (props)=>{
    return(
        <section className = {classes.CovidInfo}>
            <div className = {classes.StylingLine}></div>

            <div className = {classes.CovidDiv}>
                <Route path = "/" component = {CovidDashboard} />
            </div>
            <div className = {classes.InfoDiv} style = {{background: "linear-gradient(#fff, " + props.colors[1] + ")"}}>
            {/* Extra Navigation Stuff to Be inserted in this div */ }
                <div className = {classes.InfoDiv__extraNavs}>
                    
                </div>
                <div className = {classes.StylingLine}></div>
                <div className = {classes.Lintt}><Lintt /></div>

                <Route path = "/" component = {InfoBar} />
                <div className = {classes.SecondLine}>
                    <div className = {classes.StylingLine}></div>
                </div>
                <Upcoming/>
            </div>
        </section>
    );
}

export default covidInfo;