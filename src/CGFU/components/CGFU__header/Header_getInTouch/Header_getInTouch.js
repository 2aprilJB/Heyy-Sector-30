import React from 'react';
import classes from './Header_getInTouch.module.css';

const getInTouch = ()=>{
    return(
        <div className = {classes.GetInTouch}>
                <div className = {classes.GetInTouch_leftLinks}>
                    <button className = {classes.Header__link_fb}>
                        <ion-icon name = "logo-facebook" />
                    </button>
                    <button className = {classes.Header__link_fb}>
                        <ion-icon name = "logo-github" />
                    </button>
                </div>

                <div className = {classes.GetInTouch_centerHeading}>
                    COVID-19
                </div>

                <div className = {classes.GetInTouch_rightLinks}>
                    <button className = {classes.Header__link_fb}>
                        <ion-icon name = "logo-twitter" />
                    </button>
                </div>
            </div>
    );
}

export default getInTouch;