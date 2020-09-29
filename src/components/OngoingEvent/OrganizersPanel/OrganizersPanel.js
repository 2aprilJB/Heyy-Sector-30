import React from 'react';
import classes from './OrganizersPanel.module.css';

const panel = ()=>{
    return(
        <div className = {classes.OrganizersPanel}>
            <h2 className = {classes.Title}>ORGANIZED<br/>BY</h2>
            <div className = {classes.InfoDiv_mid}>
                <div className = {classes.Info}>
                    Something Needs To be here Trust
                </div>

                <div className = {classes.OrganizerImage}>
                    
                </div>

                <div className = {classes.Info}>
                    Me It'll Be sweet! And that'll
                </div>
            </div>
            <div className = {classes.OrganizerName}>Soumitra Jha</div>
            <div className = {classes.Participate}>Participate</div>
        </div>
    );
}

export default panel;