import React from 'react';
import classes from './ChangeSubject.module.css';

const changeSubject = (props)=>{
    let iconName = null;
    if(props.type === "next"){
        iconName = "arrow-down-circle";
    }
    else{    
        iconName = "arrow-up-circle";
    }
    return(
        <div onClick = {props.clicked} className = {classes.ChangeSubject}>
            <ion-icon name = {iconName} />
        </div>
    );
}

export default changeSubject;