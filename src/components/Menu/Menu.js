import React from 'react';
import Thirty from '../Header/Thirty/Thirty';
import classes from './Menu.module.css';
import {withRouter} from 'react-router-dom';

const menu = (props)=>{
    let onKnow = ()=>{
        props.backDrop();
        window.scrollTo(100,800);
    }
    let onThirty = ()=>props.history.push("/");
    let onCGFU = ()=>props.history.push("/CGFU");
    let onBlogClick = ()=>props.history.push("/blogs");
    return(
        <div className = {classes.Menu}>
            <div onClick = {onThirty} className = {classes.ThirtyContainer}>
                <Thirty />
            </div>
            <ul className = {classes.Menu__elements}>
                <li onClick = {onCGFU}>CGFU</li>
                <li onClick = {onKnow}>Know More</li>
                <li>Ongoing Event</li>
                <li onClick = {onBlogClick}>Lintt BLOGS</li>
            </ul>

            <div className = {classes.Menu__videos}></div>
            <button onClick = {props.backDrop} className = {classes.Menu__backDrop}><ion-icon name = "log-out" /></button>
        </div>
    );
}

export default withRouter(menu);