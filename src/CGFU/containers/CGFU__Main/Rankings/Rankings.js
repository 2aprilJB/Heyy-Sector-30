import React, { Component } from 'react';
import InformModule from './InformModule/InformModule';
import classes from './Rankings.module.css';
 
class Rankings extends Component{
    render(){
        let props = this.props.localityProps;
        return(
            <div className = {classes.Rankings}>
                <div className = {classes.Rank}>
                    <div className = {classes.Hash}>#</div>
                    <div className = {classes.Number}>{this.props.rank}</div>
                </div>
                <div className = {classes.RankInform}>
                    <div className = {classes.BubbleSector}>{this.props.sector}</div> 
                    <div className = {classes.LocalityInfo}>
                        <div className = {classes.Locality}>Sector-{this.props.sector}</div>
                        <div className = {classes.Information}>
                            <InformModule type = 'active' iconName = "fitness" data = {props.active} />
                            <InformModule type = 'recovered' iconName = "heart-circle-outline" data = {props.recovered} />
                            <InformModule type = 'deaths' iconName = "skull" data = {props.deaths} />
                            <InformModule type = 'containment' iconName = "bed" data = {props.containment} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rankings;