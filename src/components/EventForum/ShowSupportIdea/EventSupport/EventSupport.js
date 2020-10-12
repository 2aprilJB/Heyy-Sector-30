import React, { Component } from 'react';
import classes from './EventSupport.module.css';

class EventSupport extends Component{
    state = {
        toggleFullSupport: false,
    }
    toggleSupportInfo = ()=>{
        let prevToggle = this.state.toggleFullSupport;
        this.setState({
            toggleFullSupport: !prevToggle,
        });
    }
    render(){
        let support = this.props.Support;
        return(
            <div className = {classes.EventSupport}>
                <div style = {{color:support.iconColor}} className = {classes.SupportIcon}>
                    <ion-icon name = {support.iconName} />
                </div>
                <div style = {{backgroundColor: support.buttColor}} onClick = {this.toggleSupportInfo} className = {classes.ToggleSupportInfo}>{support.name}</div>

                {this.state.toggleFullSupport?support.supportInfo:<div className = {classes.Some}>{support.placeHolderInfo}</div>}
                
            </div>
        );
    }
}

export default EventSupport;