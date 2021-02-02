import React from 'react';
import classes from './Upcoming.module.css';

const upcoming = (props)=>{
    return(
        <div className = {classes.MainContainer}>
            <h3 className = {classes.Title}>UPCOMING EVENTS</h3>
            <div className = {classes.Events}>
                <div className = {classes.Card}><ion-icon name = "skull-outline"/></div>
                <div className = {classes.Card}></div>
                <div className = {classes.Card}><ion-icon name = "skull-outline"/></div>
            </div>
        </div>
    );
}

export default upcoming;