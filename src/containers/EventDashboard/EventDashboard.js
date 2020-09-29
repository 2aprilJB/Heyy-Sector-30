import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard__Entry';
import classes from './EventDashboard.module.css';

class EventDashboard extends Component{
    state = {
        entries: [
            {
                entryUrl: 'https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg',
                entryName: 'Akshita',
                claps: 10,
                upVotes: 12,
            },
            {
                entryUrl: 'https://epsilon.aeon.co/images/314eda91-dfc1-4247-b52c-4ba3e6476e8b/idea_sized-samg-trinh-6037081748_038ef4ce2d_o.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 2,
            },
            {
                entryUrl: 'https://i.pinimg.com/originals/a0/e4/d7/a0e4d70b0f0bc1156843053395c1c123.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 14,
            },
            {
                entryUrl: 'https://wallpapercave.com/wp/wp2665203.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 32,
            },
            {
                entryUrl: 'https://epsilon.aeon.co/images/314eda91-dfc1-4247-b52c-4ba3e6476e8b/idea_sized-samg-trinh-6037081748_038ef4ce2d_o.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 41,
            },
            {
                entryUrl: 'https://epsilon.aeon.co/images/314eda91-dfc1-4247-b52c-4ba3e6476e8b/idea_sized-samg-trinh-6037081748_038ef4ce2d_o.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 34,
            },
            {
                entryUrl: 'https://epsilon.aeon.co/images/314eda91-dfc1-4247-b52c-4ba3e6476e8b/idea_sized-samg-trinh-6037081748_038ef4ce2d_o.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 27,
            },
            {
                entryUrl: 'https://epsilon.aeon.co/images/314eda91-dfc1-4247-b52c-4ba3e6476e8b/idea_sized-samg-trinh-6037081748_038ef4ce2d_o.jpg',
                entryName: 'Akshay',
                claps: 0,
                upVotes: 29,
            },
        ],
    }
    onClapHandler = (entry, ind)=>{
        entry.claps++;
        let tempEntries = this.state.entries;
        tempEntries[ind] = entry;
        this.setState({
            entries: tempEntries,
        });
    }
    render(){
        return(
            <div className = {classes.EventDashboard}>
                <div className = {classes.Event_Title}>PhotoGraphy</div>
                
                <div className = {classes.Dashboard}>
                    <div className = {classes.Dashboard_title}>DASHBOARD</div>
                    {this.state.entries.map((entry,ind)=>{
                        return <Dashboard key = {'Entry' + ind} clapClick = {this.onClapHandler} entry = {entry} rank = {ind + 1} />
                    })}
                </div>
            </div>
        );
    }
}

export default EventDashboard;


/*
Entries: [
    
]
*/