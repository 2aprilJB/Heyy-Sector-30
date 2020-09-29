import React from 'react';
import Thirty from '../Header/Thirty/Thirty';
import classes from './Menu.module.css';
import {withRouter} from 'react-router-dom';

const menu = (props)=>{
    let onKnow = ()=>{
        props.backDrop();
    }
    let onCGFU = ()=>props.history.push("/CGFU");
    return(
        <div className = {classes.Menu}>
            <div className = {classes.ThirtyContainer}>
                <Thirty />
            </div>
            <ul className = {classes.Menu__elements}>
                <li onClick = {onCGFU}>CGFU</li>
                <li onClick = {onKnow}>Know More</li>
                <li>Ongoing Event</li>
            </ul>

            <div className = {classes.Menu__videos}></div>
            <button onClick = {props.backDrop} className = {classes.Menu__backDrop}><ion-icon name = "log-out" /></button>
        </div>
    );
}

export default withRouter(menu);