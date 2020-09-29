import React from 'react';
import Thirty from './Thirty/Thirty';
import classes from './Header.module.css';

const header = (props)=>{
    return(
        <div className = {classes.Header}>
            
            <div className = {classes.SectorThirtyContainer}>
                    <div className = {classes.Sector}>SECTOR</div>
                    <div className = { classes.Thirty}><Thirty /></div>
            </div>
            <div className = {classes.AppBar}>
                <div className = {classes.NewsLetter}>
                    <ion-icon name="newspaper-outline" />
                </div>
                <div onClick = {props.onMenuClick} className = {classes.Menu}>
                    <ion-icon name="menu"/>
                </div>
            </div>

            <div className = {classes.Gandhinagar}>
                GANDHINAGAR
            </div>
        </div>
    );
}

export default header;