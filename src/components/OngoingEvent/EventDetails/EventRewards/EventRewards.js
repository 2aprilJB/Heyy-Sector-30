import React, {Fragment} from 'react';
import classes from './EventRewards.module.css';

const rewards = (props)=>{
    return(
        <Fragment>
            <h2 className = {classes.RewardsTitle}>Rewards</h2>
            <div className = {classes.PrizesWorth}>
                <h3>Prizes<br/>Worth</h3>
                <div className = {classes.MainIcon}></div>
                <h3>{props.Worth}<br/><ion-icon name = "cash-outline"/></h3>
            </div>
        </Fragment>
    );
}

export default rewards;