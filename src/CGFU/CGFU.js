import React, { Component } from 'react';
import Header from './components/CGFU__header/CGFU__header';
import Middle from './components/CGFU__middle/CGFU__middle';
import classes from './CGFU.module.css';
import Main from './containers/CGFU__Main/C__Main';
import ComingSoon from './components/CGFU__comingSoon/ComingSoon';
import Footer from '../components/Footer/Footer';
import News from './components/News/News';
import OtherMetrics from './containers/OtherMetrics/OtherMetrics';
import BedOccupancy from './components/BedOccupancy/BedOccupancy';

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
                <OtherMetrics moreInfo = "#" metricName = "Bed Occupancy" iconName = "bed-outline">
                    <BedOccupancy />
                </OtherMetrics>
                {/* <OtherMetrics moreInfo = "#" metricName = "Hospitals" iconName = "heart-half-outline">
                    Beauty
                </OtherMetrics> */}
                <ComingSoon />
                {/* <div className = {classes.News}>
                    <ion-icon name = "flash-outline" />
                    News
                    <ion-icon name = "flash-outline" />
                </div>
                <News /> */}
                <Footer />
            </div>
        );
    }
}

export default CGFU;