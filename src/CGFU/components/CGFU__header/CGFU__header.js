import React from 'react';
import GetInTouch from './Header_getInTouch/Header_getInTouch';
import classes from './CGFU__header.module.css';

const header = ()=>{
    return(
        <div className = {classes.Header}>
            <GetInTouch />
            <h2 className = {classes.Header_gandhinagar}>GANDHINAGAR</h2>
            <div className = {classes.Header_line}></div>
        </div>
    );
}

export default header;