import React, {Component} from 'react';
import ClapIcon from '../../../assets/Clap/Clap';
import classes from './Dashboard__Entry.module.css';

class Dashboard extends Component{
    render(){
        return(
            <div className = {classes.Entry} style = {{backgroundImage: "url(" + this.props.entry.entryUrl + ")"}}>
                <div className = {classes.TopDiv}>
                    <div className = {classes.Rank}>#{this.props.rank}</div>
                    <div className = {classes.PopOut}><ion-icon name = "open-outline"/></div>
                </div>
                <div className = {classes.BottomDiv}>
                    <div className = {classes.EntryName}>{this.props.entry.entryName}</div>
                    <div className = {classes.Claps}>
                        <button onClick = {()=>this.props.clapClick(this.props.entry, (this.props.rank-1))} className = {classes.Clap_button}><ClapIcon /></button>
                        <div className = {classes.Clap_count}>{this.props.entry.claps}</div>
                    </div>
                    <div className = {classes.Upvotes}>
                        <button className = {classes.Upvotes_button}><ion-icon name = "arrow-up"/></button>
                        <div className = {classes.Upvote_count}>{this.props.entry.upVotes}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;



