import React, { Component } from 'react';
import Header from './components/CGFU__header/CGFU__header';
import Middle from './components/CGFU__middle/CGFU__middle';
import classes from './CGFU.module.css';
import Main from './containers/CGFU__Main/C__Main';
import ComingSoon from './components/CGFU__comingSoon/ComingSoon';
import Footer from '../components/Footer/Footer';

class CGFU extends Component{
    onClickHandler = ()=>{
        this.props.history.push("/");
    }
    render(){
        return(
            <div className = {classes.CGFU__body}>
                <Header />
                <Middle clicked = {this.onClickHandler} />
                <Main />
                <div className = {classes.News}>
                    <ion-icon name = "newspaper" />
                    News
                    <ion-icon name = "newspaper" />
                </div>
                <ComingSoon />
                <Footer />
            </div>
        );
    }
}

export default CGFU;