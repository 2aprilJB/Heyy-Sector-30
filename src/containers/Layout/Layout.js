import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import {Route} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
// import classes from './Layout.module.css';

class Layout extends Component{
    state = {
        showMenu:false,
    }
    onMenuClickHandler = ()=>{
        this.setState({
            showMenu: true,
        });
    }
    onBackDrop = ()=>{
        this.setState({
            showMenu: false,
        });
    }
    render(){
        return(
            <Fragment>
                <Header onMenuClick = {this.onMenuClickHandler} />
                {this.state.showMenu?<Menu backDrop = {this.onBackDrop} />:null}
                {this.props.children}
                <Footer />
            </Fragment>
        );
    }
}

export default Layout; 