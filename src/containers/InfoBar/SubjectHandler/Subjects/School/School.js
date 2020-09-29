import React from 'react';
import School from '../../../../../assets/Images/School.png';
import classes from './School.module.css';

const school = ()=>{
    return(
        <img className = {classes.School} src = {School} alt = "School_cha_Icon" />
    );
}

export default school;