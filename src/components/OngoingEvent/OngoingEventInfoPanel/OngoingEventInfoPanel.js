import React from 'react';
import classes from './OngoingEventInfoPanel.module.css';

const infoPanel = ()=>{
    return(
        <div className = {classes.InfoPanel}>
            <h2 className = {classes.MainHead}>Ongoing Event Info</h2>
            <div className = {classes.StylingLine}></div>
        </div>
    );
}

export default infoPanel;