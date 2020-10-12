import React from 'react';
import ClapIcon from '../../../../assets/Clap/Clap';
import classes from './ClapNCount.module.css';

const clap = (props)=>{
    return(
        <div className = {classes.Claps}>
            <button onClick = {()=>props.clapClick(props.entry, (props.rank-1))} className = {classes.Clap_button}><ClapIcon /></button>
            <div className = {classes.Clap_count}>{props.entry.claps}</div>
        </div>
    );
}

export default clap;