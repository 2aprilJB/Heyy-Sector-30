import React from 'react';
import classes from './CovidDisplayModule.module.css';

const covidDisplayModule = (props)=>{
    let stylingModule = [classes.DisplayModule];
    switch(props.description.type){
        case 'active':
            stylingModule.push(classes.Active);
            break;
        case 'confirmed':
            stylingModule.push(classes.Confirmed);
            break; 
        case 'deaths':
            stylingModule.push(classes.Deaths);
            break;
        default:
            console.log('Error_Invalid Type of Display Module');
    }
    return(
        <div className = {stylingModule.join(' ')}>
            <div className = {classes.DisplayModule__name}>
                {props.description.type}
            </div>
            <div className = {classes.DisplayModule__name__border_bottom}>
                {/* Just Some Fix for Styling */}
            </div>
            <div className = {classes.DisplayModule__value}>
                {props.description.value}
            </div>
            <div className = {classes.DisplayModule__icon}>
                <ion-icon name = {props.description.icon} />
            </div>
        </div>
    );
}

export default covidDisplayModule;