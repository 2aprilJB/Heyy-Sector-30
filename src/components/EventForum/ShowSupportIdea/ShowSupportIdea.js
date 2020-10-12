import React from 'react';
import StyledBreak from '../../Footer/StyledBreak/StyledBreak';
import classes from './ShowSupportIdea.module.css';
import EventSupport from './EventSupport/EventSupport';

const showSupportIdea = (props)=>{
    let eventSupport = [
        {
            name: 'Sponsor',
            iconName: 'cash-outline',
            iconColor: '#335d2d',
            buttColor: '#ffdd67',
            placeHolderInfo: 'It might not happen without your support as a Sponsor',
            supportInfo: <div className = {classes.SponsorShipInfo}></div>,
        },
        {
            name: 'Volunteer',
            iconName: 'people-outline',
            iconColor: 'black',
            buttColor: '#8ac6d1',
            placeHolderInfo: 'The other way you to show your support for this event',
            supportInfo: <div className = {classes.VolunteerInfo}></div>,
        },
    ];
    return(
        <div className = {classes.ShowSupport}>
            <div className = {classes.IdeaShow}>
                <h3 className = {classes.EventName}>{props.idea.name}</h3>
                <StyledBreak lineWidth = {15} divColor = {'Green'} />
                <h4 className = {classes.BriefHeading}>Brief</h4>
                <p className = {classes.BriefPara}>{props.idea.brief}</p>

                <div className = {classes.AuthorDate}>
                    <h6 className = {classes.Author}>{props.idea.author}</h6>
                    <h6 className = {classes.Date}>{props.idea.date}</h6> 
                </div>
            </div>
            <EventSupport Support = {eventSupport[0]} />
            <EventSupport Support = {eventSupport[1]} />
        </div>
    );
}

export default showSupportIdea;