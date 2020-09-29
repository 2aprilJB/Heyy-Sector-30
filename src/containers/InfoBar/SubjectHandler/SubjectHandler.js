import React, { Component } from 'react';
import ChangeSubject from './ChangeSubject/ChangeSubject';
import Subject from './Subjects/Subjects';
import classes from './SubjectHandler.module.css';


class SubjectHandler extends Component{

    state = {
        onFocusSubject: 0,
        subjects: ['','gurudwara','sindhu','school', 'nirankari'],
    }

    onClickHandler = (direction)=>{
        let temp = this.state.onFocusSubject;
        if(direction === "next"){
            if(temp === (this.state.subjects.length - 1))
                {temp = 0;}
            else
                temp++;
        }
        else{
            if(temp === 0){
                temp = this.state.subjects.length;
            }    
            temp--;
        }
        this.setState({
            onFocusSubject: temp,
        });

        this.props.history.push('/' + this.state.subjects[temp]);
    }

    render(){
     return(
        <div className = {classes.SubjectHandler}>
            <ChangeSubject clicked = {()=>this.onClickHandler("prev")} type = "prev" subject = {this.state.subjects[this.state.onFocusedSubject]} />
                <div className = {classes.Subject}><Subject /></div>
            <ChangeSubject clicked = {()=>this.onClickHandler("next")} type = "next" subject = {this.state.subjects[this.state.onFocusedSubject]} />
        </div>
      );
    }
}

export default SubjectHandler;