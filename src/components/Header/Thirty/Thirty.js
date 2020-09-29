import React from 'react';
import Three from '../../../assets/SVGs/Three.svg';
import Zero from '../../../assets/SVGs/Zero.svg';
import classes from './Thirty.module.css';

const thirty = ()=>{
    return(
        <div className = {classes.Thirty}>
            <img className = {classes.Three} src = {Three} alt = 'Mah burra'></img>
            <img className = {classes.Zero} src = {Zero} alt = 'Mah Hero'></img>
        </div>
    );
}

export default thirty;