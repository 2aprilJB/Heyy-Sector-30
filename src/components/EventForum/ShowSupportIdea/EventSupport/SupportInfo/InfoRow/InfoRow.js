import React from 'react';
import classes from './InfoRow.module.css';

const infoRow = (props)=>{
    return(
        <div className = {classes.Details}>
            <b>{props.detailName}</b><ion-icon name = {props.detailIcon}/> :<h6>{props.detail}</h6> 
        </div>
    );
}

export default infoRow;