import React from 'react';
import classes from './OngoingEvent.module.css';
import EventDashboard from '../../containers/EventDashboard/EventDashboard';
import OngoingEventInfoPanel from './InfoPanel/OngoingEventInfoPanel';
import OrganizersPanel from './OrganizersPanel/OrganizersPanel';
import StyledBreak from '../Footer/StyledBreak/StyledBreak';

const ongoingEvent = (props)=>{
    return(
        <div className = {classes.OngoingEvent}>
            <div className = {classes.OngoingIcon}><ion-icon name = "flash-outline"/></div>
            <div className = {classes.Heading_Container}>
                <div className = {classes.Heading_MidLine}></div>
                <h3 className = {classes.Heading_Title}>Ongoing Event</h3>
            </div>  
            <EventDashboard />
            <StyledBreak divColor = {'#ff414d'} lineWidth = {15} />
            <OngoingEventInfoPanel />
            <OrganizersPanel />
        </div>
    );
}

export default ongoingEvent;