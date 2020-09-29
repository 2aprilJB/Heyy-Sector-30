import React from 'react';
import Nirankari from '../../../../../assets/SVGs/Nirankari.svg';
import classes from './Nirankari.module.css';

const nirankari = ()=>{
    return(
        <img className = {classes.Nirankari} src = {Nirankari} alt = "Nirankari_cha_Icon" />
    );
}

export default nirankari;