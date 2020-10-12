import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SubjectHandler from './SubjectHandler/SubjectHandler';
import classes from './InfoBar.module.css';

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
    
    render(){
        return(
        /*NOTE: I have divided the InfoBar in three divs - 'Subject', 'Info', 'Navigation'*/
                        /*Subject: Has a reusable Subject Handler*/
                        /*Info: */    
            <div className = {classes.Infobar}>
                <div className = {classes.Infobar__subject}>
                    <Route path = "/" component = {SubjectHandler} /> {/*Passed Subject handler through Route : So i can have access to prop.history*/}
                </div>
                
                <div className = {classes.Infobar__info}>
                    
                </div>

                <div className = {classes.Infobar__navigation}>
                    <div><ion-icon name = "heart-circle-outline" /></div>
                    <div><ion-icon name = "heart-circle" /></div>
                </div>
            </div>
        );
    }
}

export default InfoBar;

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