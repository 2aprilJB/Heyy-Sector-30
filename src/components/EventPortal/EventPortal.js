import React from 'react';
import classes from './EventPortal.module.css';
import Face from './Face/Face';
const eventPortal = (props)=>{
    return(
        <div className = {classes.EventPortal}>
            <div className = {classes.EventPortal__title}>
                <span>Event</span>
                <span>Portal</span>
            </div>
            <div className = {classes.StylingLine_1}></div>
            <Face />
            <div className = {classes.LanguageBar}>Language Bar</div>
        </div>
    );
}

export default eventPortal;