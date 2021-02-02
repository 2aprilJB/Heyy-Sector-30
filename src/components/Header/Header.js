import React from 'react';
import Thirty from './Thirty/Thirty';
import classes from './Header.module.css';
import Lintt from '../../assets/Lintt/Lintt';

const header = (props)=>{
    return(
        <div className = {classes.Header} style = {{background:'linear-gradient('+  props.color + ',#fff)'}}>
            
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

            {props.Gandhinagar?<div className = {classes.Gandhinagar}>
                GANDHINAGAR
            </div>:
            <div className = {classes.Lintt} style = {{width: '8rem'}}><Lintt/></div>}
        </div>
    );
}

export default header;