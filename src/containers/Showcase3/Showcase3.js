import React, { Component } from 'react';
import Alerts from './Alerts/Alerts';
import About from './About/About';
import classes from './Showcase3.module.css';
import Background from '../../assets/Images/Jungle_back.jpg';
import Author from './Author/Author';
import Posts from './Posts/Posts';

class Showcase3 extends Component{
    state = {
        activeSubject: this.props.activeSub,       //This is Active Subject's Index
        
    }
    activeSubjectHandler = (index)=>{    //Updates ActiveSubject index on click of navigation element
        this.setState({
            activeSubject: index,
        })
    }
    render(){
        let navColor = this.props.navColor;
        if(!navColor)
            navColor = "#c90808";
        let activeSub = this.state.activeSubject;
        let subObjects = this.props.subObjects;
        return(
            <div className = {classes.Showcase} style = {{background: 'url('+Background+')'}}>
                <nav className = {classes.NavBar}>
                    {subObjects.map((subject,ind)=><li key = {subject + ind} onClick = {()=>this.activeSubjectHandler(ind)} style = {activeSub===ind?{boxShadow:'0px 0px 8px #000', border: '4px solid '+ navColor,backgroundImage: 'url(' + subject.navImage + ')'}:{backgroundImage: 'url(' + subject.navImage + ')'}}></li>)}
                </nav>
                <h3 className = {classes.SubjectName}>{subObjects[activeSub].subject}</h3>
                <div style = {{borderBottom: "5px solid "+ navColor}} className = {classes.StylingLine}></div>
                {/* Modules to show on Active/Clicked Subject */}
                {this.props.alerts?<Alerts alerts = {subObjects[activeSub].alerts } />:null}
                {this.props.about?<About about = {subObjects[activeSub].about} />:null}
                {this.props.posts?<Posts cat = {this.props.cat} blogs = {subObjects} activeAuthorCat = {activeSub} />:null}   
                {this.props.author?<Author author = {subObjects[activeSub].author} />:null}  
            </div>
        );
    }
}

export default Showcase3;

