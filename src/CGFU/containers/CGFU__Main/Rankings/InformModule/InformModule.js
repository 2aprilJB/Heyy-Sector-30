import React from 'react';
import classes from './InformModule.module.css';

const informModule = (props)=>{
    return(
        <div className = {[classes.InformModule,classes[props.type]].join(' ')}>
            <ion-icon name = {props.iconName} />
            <p>{props.data}</p>
        </div>
    );
}

export default informModule;