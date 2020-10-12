import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard__Entry';
import classes from './EventDashboard.module.css';
import axios from 'axios';
import Spinner from '../../assets/Spinner/Spinner';

class EventDashboard extends Component{
    state = {
        loaded: false,
        entries: [],
    }
    componentDidMount(){
        axios.get('https://heyy-sector-30.firebaseio.com/ongoing-event/entries.json')
             .then(response=>{
                 this.setState({
                     entries: response.data,
                     loaded: true,
                 });
             })
             .catch(error=>{
                 alert(error);
                 return Promise.reject(error);
             })
    }
    onClapHandler = (entry, ind)=>{
        entry.claps++;
        let tempEntries = this.state.entries;
        tempEntries[ind] = entry;
        this.setState({
            entries: tempEntries,
        });
        axios.put('https://heyy-sector-30.firebaseio.com/ongoing-event/entries.json',tempEntries);
    }
    render(){
        return(
            this.state.loaded?

            <div className = {classes.EventDashboard}>
                <div className = {classes.Event_Title}>PhotoGraphy</div>
                
                <div className = {classes.Dashboard}>
                    <div className = {classes.Dashboard_title}>DASHBOARD</div>
                    {this.state.entries.map((entry,ind)=>{
                        return <Dashboard key = {'Entry' + ind} clapClick = {this.onClapHandler} entry = {entry} rank = {ind + 1} />
                    })}
                </div>
            </div>

            :<Spinner />
        );
    }
}

export default EventDashboard;


/*
Entries: [
    
]
*/