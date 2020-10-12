import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

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
            <div className = {classes.Layout}>
                <Header onMenuClick = {this.onMenuClickHandler} />
                {this.state.showMenu?<Menu backDrop = {this.onBackDrop} />:null}
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout; 