import React from 'react';
import classes from './CGFU__Overall.module.css'

const overall = (props)=>{
    return(
        <div className = {classes.Info__overall}>
            <div className = {classes.Recovered}>
                <h4 className = {classes.Recovered_title}>Recovered</h4>
                <h3 className = {classes.Recovered_data}>455</h3>
            </div>
            <div className = {classes.Active}>
                <h4 className = {classes.Active_title}>Active</h4>
                <h3 className = {classes.Active_data}>336</h3>
            </div>
            <div className = {classes.Deaths}>
                <h4 className = {classes.Deaths_title}>Deaths</h4>
                <h3 className = {classes.Deaths_data}>456</h3>
            </div>
            <div className = {classes.Containment}>
                <h4 className = {classes.Containment_title}>Containment</h4>
                <h3 className = {classes.Containment_data}>895</h3>
            </div>
        </div>
    );
}

export default overall;