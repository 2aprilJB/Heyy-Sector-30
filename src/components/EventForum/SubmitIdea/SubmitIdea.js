import React, { Component } from 'react';
import classes from './SubmitIdea.module.css';

class SubmitIdea extends Component{
    state = {
        formData:{
            eventName: null,
            name: null,
            brief: null,
            num: null,
            email: null,
        },
    }
    inpChangeHandler = (e,type)=>{
        let formData = this.state.formData;
        formData[type] = e.target.value;

        this.setState({
            formData: formData,
        });
    }
    onSubmission = (e)=>{
        e.preventDefault();
        console.log(this.state.formData);
        this.props.onSubmission();
    }
    render(){
        return(
            <div className = {classes.SubmitIdea}>
                <form onSubmit = {this.onSubmission} className = {classes.Form}>
                    <div className = {classes.Title}>
                        <label htmlFor = "eventName">Event Title:</label>
                        <input onChange = {(e)=>this.inpChangeHandler(e,"eventName")} type = "text"></input>
                    </div>
                    <div className = {classes.Control}>
                        <label htmlFor = "name">Your Name:</label>
                        <input onChange = {(e)=>this.inpChangeHandler(e,"name")} type = "text"></input>
                    </div>
                    <div className = {classes.Control}>
                        <label htmlFor = "brief">Idea Brief:</label>
                        <textarea onChange = {(e)=>this.inpChangeHandler(e,"brief")} name = "brief" rows = "5" className = {classes.Brief}></textarea>
                    </div>
                    <div className = {classes.Control}>
                        <label htmlFor = "contactNo">Contact no.:</label>
                        <input onChange = {(e)=>this.inpChangeHandler(e,"num")} type = "text"></input>
                    </div>
                    <div className = {classes.Control}>
                        <label htmlFor = "email">Email id:</label>
                        <input onChange = {(e)=>this.inpChangeHandler(e,"email")} type = "email"></input>
                    </div>
                    <button className = {classes.SubmitButt}>Submit</button>
                </form>
            </div>
        );
    }
}

export default SubmitIdea;