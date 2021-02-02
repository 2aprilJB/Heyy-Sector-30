import React from 'react';
import classes from './OtherMetrics.module.css';

const otherMetrics = (props)=>{
    return(
        <div className = {classes.Container}>
            <div className = {classes.Header}>
                <div className = {classes.Logo}>
                    <ion-icon name = {props.iconName}/>
                </div>
                <h3 className = {classes.MetricName}>{props.metricName}</h3>
            </div>
            <div className = {classes.Content}>
                {props.children}
            </div>
            <a href = {props.moreInfo}><ion-icon name = "enter-outline"/></a>
        </div>
    );
}

export default otherMetrics;