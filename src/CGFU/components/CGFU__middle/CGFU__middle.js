import React from 'react';
import Overall from './CGFU__Overall/CGFU__Overall';
import classes from './CGFU__middle.module.css';
import ImpLinks from './ImpLinks/ImpLinks';
import InfoDiv from './InfoDiv/InfoDiv';
import Thirty from '../../../components/Header/Thirty/Thirty';

const middle = (props)=>{
    return(
        <div className = {classes.Middle}>
            <ImpLinks>
                {/* Here Some Links can be Inserted With ICONS */}
            </ImpLinks>
            <div className = {classes.Middle__info}>
                <InfoDiv>
                    <div className = {classes.ForMore_title}>
                        <div className = {classes.ForMore}>
                            <ion-icon name = "alert" />
                        </div>
                    </div>
                    We're collecting More data<br/>
                    Support us by Sharing
                </InfoDiv>
                <div className = {classes.BubbleStick}>
                    <div onClick = {props.clicked} className = {classes.Bubble}>
                        <div className = {classes.Bubble_thirty}><Thirty/></div> 
                    </div>
                    <div className = {classes.Stick}></div>
                </div>
                <InfoDiv>
                    <div className = {classes.Info__overall_title}>
                        OVERALL
                    </div>
                    <Overall />
                </InfoDiv>
            </div>
        </div>
    );
}

export default middle;