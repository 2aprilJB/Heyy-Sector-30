import React from 'react';
import {Route} from 'react-router-dom';
import Thirty from '../../../../components/Header/Thirty/Thirty';
import Gurudwara from './Gurudwara/Gurudwara';
import Nirankari from './Nirankari/Nirankari';
import Sindhu from './Sindhu/Sindhu';
import School from './School/School';
import classes from './Subjects.module.css';

const subject = ()=>{
    return(
        <div className = {classes.Subject}>
            <Route path = "/" exact component = {Thirty} />
            <Route path = "/gurudwara" exact component = {Gurudwara} />
            <Route path = "/nirankari" exact component = {Nirankari} />
            <Route path = "/sindhu" exact component = {Sindhu} />
            <Route path = "/school" exact component = {School} />
        </div>
    );
}

export default subject;