import React from 'react';
import classes from './EventPortal.module.css';
import Face from './Face/Face';
const eventPortal = (props)=>{
    return(
        <div className = {classes.EventPortal} style = {{background: "linear-gradient(180deg,"+ props.colors[1] +" 10%, #fff 60%)"}}>
            <div className = {classes.EventPortal__title}>
                <span>Event</span>
                <span>Portal</span>
            </div>
            <div className = {classes.StylingLine_1}></div>
            <Face />
        </div>
    );
}

export default eventPortal;