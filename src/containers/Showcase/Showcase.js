import React, { Component } from 'react';
import classes from './Showcase.module.css';

class Showcase extends Component{
    state = {
        Content: this.props.children[0],
        index: 0,
    }
    onTabClick = (tabContent,index)=>{
        this.setState({
            Content: tabContent,
            index: index,
        });
    }
    render(){
    return(
        <div className = {classes.Showcase}>
            <div className = {classes.Content}>{this.state.Content}</div>
            <div className = {classes.ShowTabs}>
                {this.props.children.map((tab,ind)=>{
                    return <div style = {this.state.index === ind ?{border: "3px solid red"}:null} key = {ind + 'tabs'} onClick = {()=>this.onTabClick(tab,ind)} className = {classes.Tabs}> </div>;
                })}
            </div>
        </div>
    );
    }
}

export default Showcase;