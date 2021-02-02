import React, { Component, Fragment } from 'react';
import Modal from '../../hoc/Modal/Modal';
import classes from './Feedback.module.css';

class Feedback extends Component{
    state = {
        showModal: false,
    }
    forModal = ()=>{
        this.setState({
            showModal: !this.state.showModal
        });
    }
    render(){
        return(
            <Fragment>
                <div className = {classes.Feedback}>
                    <p className = {classes.Para}>Please do a small favor, Click on th button below</p>
                    <div onClick = {this.forModal} className = {classes.Butt}>Feedback</div>
                </div>
                <Modal show = {this.state.showModal} onBackDrop = {this.forModal}>Heyy</Modal>
            </Fragment>
        );
    }
}

export default Feedback;