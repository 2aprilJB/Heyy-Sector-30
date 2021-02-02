import React, {Fragment} from 'react';
import classes from './EventInfo.module.css';

const eventInfo = (props)=>{
    return(
        <Fragment>
            <h3 className = {classes.EventTitle}>{props.eventInfo.EventName}</h3>
            <div className = {[classes.StylingLine,classes.Style1].join(' ')}></div>

            <p className = {classes.EventBrief}>{props.eventInfo.EventBrief}</p>
            <div className = {[classes.StylingLine,classes.Style2].join(' ')}></div>

            <div style = {{background: 'url('+ props.eventInfo.EventBackground +')'}} className = {classes.ImageContainer}></div>
        </Fragment>
    );
}

export default eventInfo;