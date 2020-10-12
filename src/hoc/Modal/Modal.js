import React from 'react';
import classes from './Modal.module.css';

const modal = (props)=>{
    let mooodal = <div className = {classes.BackDrop}>
                    <div className = {classes.ModalWrapper}>
                        <div onClick = {props.onBackDrop} className = {classes.Cross}><ion-icon name = "log-out-outline" /></div>
                        {props.children}
                    </div>
                  </div>
    return props.show?mooodal:null;
}
export default modal;