import React from 'react';
import ClapIcon from '../Images/Clap.png';
import classes from './Clap.module.css';

const clap = ()=>{
    return(
        <img className = {classes.ClapIcon} src = {ClapIcon} alt = "Claps__Icon" />
    );
}

export default clap;