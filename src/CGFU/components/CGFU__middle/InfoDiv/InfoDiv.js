import React from 'react';
import classes from './InfoDiv.module.css';

const InfoDiv = (props)=>{
    return(
        <div className = {classes.InfoDiv}>
            {props.children}
        </div>
    );
}

export default InfoDiv;
