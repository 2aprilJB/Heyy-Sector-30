import React from 'react';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Zones from '../assets/Zones/Zones';
import SectorMap from '../containers/InfoBar/SectorMap/SectorMap';
import Layout from '../containers/Layout/Layout';
import classes from './HeroMap.module.css';

class HeroMap extends Component{
    state = {
        colorScheme:['#c70039','#1eb2a6']
    }
    onBack = ()=>this.props.history.push('/');
    render(){
        return(
            <Layout colors = {this.state.colorScheme}>
            <div className = {classes.MainContainer}>
                <div className = {classes.Header}>
                    <h3>MAP & Stuff</h3>
                    <div className = {classes.StylingLine}></div>
                    <div className = {[classes.StylingLine,classes.SecondLine].join(' ')}></div>
                    <div className = {classes.NavLinks}>
                        <li onClick = {this.onBack}><ion-icon name = "arrow-back"/></li>
                        <li onClick = {this.onBack}>I</li>
                    </div>
                    <div className = {classes.StylingSaber}></div>
                </div>
                <div className = {classes.Exhibit}>
                    <SectorMap ZoneIcons />
                </div>

                <h4 className = {classes.ZoneTitle}>ZONES</h4>
                <div className = {classes.Exhibit_2}>
                    <div className = {classes.Zones}>
                        {Zones.map(zone=>{
                            return(
                                <div key = {zone.name} className = {classes.ZoneInfo}>
                                    <img alt = "SooperIcon" src = {zone.icon} className = {classes.Icon}></img>
                                    <h4 className = {classes.Name}>{zone.name}</h4>
                                    <a href = "#" className = {classes.ZoneLink}><ion-icon name = "arrow-up"/></a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
}

export default withRouter(HeroMap);