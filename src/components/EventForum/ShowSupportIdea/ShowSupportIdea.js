import React from 'react';
import classes from './ShowSupportIdea.module.css';

const showSupportIdea = (props)=>{
    return(
        <div className = {classes.ShowSupport}>
            <div className = {classes.IdeaShow}>
                <h3 className = {classes.EventName}>{props.idea.name}</h3>
                <h4 className = {classes.BriefHeading}>Brief</h4>
                <p className = {classes.BreifPara}>{props.idea.brief}</p>
            </div>
        </div>
    );
}