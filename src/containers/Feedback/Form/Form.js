import React from 'react';
import classes from './Form.module.css';

const form = (props)=>{
    return(
        <form className = {classes.Feedback}>
            <div className = {classes.Control}>
                <label></label>
            </div>
        </form>
    );
}

export default form;