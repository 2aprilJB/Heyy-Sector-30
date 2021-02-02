import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SubjectHandler from './SubjectHandler/SubjectHandler';
import classes from './InfoBar.module.css';
import SectorMap from './SectorMap/SectorMap';
import {withRouter} from 'react-router-dom';

class InfoBar extends Component{
    state = {
        subjects:{
            default:{
                info: 'SomeThing Should',
                icon: true,
            },
            gurudwara:{
                info: 'YeaH boy youre',
                icon: false,
            },
            sindhu:{
                info: 'Oh no thats shit',
                icon: true,
            },
            school:{
                info: 'Umm.what should',
                icon: true,
            },
            nirankari:{
                info: 'About some change',
                icon: true,
            }
        }
    }
    mapExpand = ()=>this.props.history.push('/HeroMap');
    render(){
        return(
        /*NOTE: I have divided the InfoBar in three divs - 'Subject', 'Info', 'Navigation'*/
                        /*Subject: Has a reusable Subject Handler*/
                        /*Info: */    
            <div className = {classes.Infobar}>
                <div style = {{"display": 'none'}} className = {classes.Infobar__subject}>
                    <Route path = "/" component = {SubjectHandler} /> {/*Passed Subject handler through Route : So i can have access to prop.history*/}
                </div>
                <div className = {classes.Infobar__subject}>
                    <a href = "#">!</a>
                    <a href = "#">?</a>
                </div>
                <div className = {classes.Infobar__info}>
                    <SectorMap ZoneIcons/>
                    <div onClick = {this.mapExpand} className = {classes.ExpandButt}>
                        <ion-icon name = "expand"/>
                    </div>
                </div>
                <div className = {classes.Infobar__navigation}>
                    <a href = "#"><ion-icon name = "heart-circle-outline" /></a>
                    <a href = "#"><ion-icon name = "heart-circle" /></a>
                </div>
            </div>
        );
    }
}

export default withRouter(InfoBar);

// Early GLOBAL subject handling INFOBAR div::-
// {Object.keys(this.state.subjects).map(sub=>{
//     let temp = "/" + sub;
//     if(sub === "default"){
//         temp = "/";
//     }
//     return <Route key = {"forInfo" + sub} exact path = {temp} 
//     render = {()=>
//     <div className = {classes.Infobar__info}>
//         <div className = {classes.Infobar__info_icon}><ion-icon name = "time" /></div>
//         <div className = {classes.Infobar__info_data}>
//             {this.state.subjects[sub].info}
//         </div>
//         <div className = {classes.StylingLine}></div>
//     </div>} />;
// })}