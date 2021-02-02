import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './OngoingEventInfoPanel.module.css';

const infoPanel = (props)=>{
    let onInfo = ()=>props.history.push('/EventDetails');
    return(
        <div className = {classes.InfoPanel}>
            <h2 className = {classes.MainHead}>Ongoing Event Info</h2>
            <div className = {classes.StylingLine}></div>
            <div className = {classes.InfoModules}>
                <div onClick = {onInfo} className = {classes.Cards}>
                    Event Info
                    <div className = {classes.StylingLine}></div>
                    <div className = {classes.HelpIco}>
                        <ion-icon name = "help-circle-outline"/>
                    </div>
                </div>
                <div className = {classes.Cards}>
                    PRIZES
                    <div className = {classes.StylingLine}></div>
                    <ion-icon name = "trophy-outline"/>
                </div>
                <div className = {classes.Cards}>
                    Participate  
                    <div className = {classes.StylingLine}></div>
                    <div className = {classes.HelpIco}>
                        <ion-icon name = "people-circle-outline"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(infoPanel);