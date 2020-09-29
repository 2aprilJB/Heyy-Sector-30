import React from 'react';
import Gurudwara from '../../../../../assets/SVGs/Gurudwara.svg';
import classes from './Gurudwara.module.css';

const gurudwara = ()=>{
    return(
        <img className = {classes.Gurudwara} src = {Gurudwara} alt = "Gurudwara_cha_Icon" />
    );
}

export default gurudwara;