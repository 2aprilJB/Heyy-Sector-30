import React from 'react';
import Lintt from '../../../../../assets/Lintt/Lintt';
import InfoRow from './InfoRow/InfoRow';
import classes from './SupportInfo.module.css';
import StyledBreak from '../../../../Footer/StyledBreak/StyledBreak';

const supportInfo = ()=>{
    return(
        <div className = {classes.SupportInfo}>
            <div className = {classes.Logo}>
                <Lintt />
            </div>
            <h3 className = {classes.Contact}>CONTACT</h3>
            <StyledBreak lineWidth = {15} divColor = {'#860000'} />
            <div className = {classes.Info}>
                <InfoRow detailName = "Phone" detail = "9663618846" detailIcon = "call-outline"/>
                <InfoRow detailName = "Email" detail = "flwt.no.limits@gmail.com" detailIcon = "mail-outline"/>
            </div>
        </div>
    );
}

export default supportInfo;