import React from 'react';
import classes from './ImpLinks.module.css';

const ImpLinks = (props)=>{
    return(
        <div className = {classes.ImpLinksBar}>
            {props.children}
        </div>
    );
}

export default ImpLinks;