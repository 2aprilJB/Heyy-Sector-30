import React from 'react';
import classes from './Face.module.css';
import Showcase from '../../../containers/Showcase/Showcase';

const face = (props)=>{
    return(
        <div className = {classes.Face}>
            <Showcase bottom>
                <div className = {classes.Face_1}>
                    Making Neighbourhood<br/>
                    More Fiendly.<br/>
                    As it used to be..but BETTER
                </div>
                <div className = {classes.Face_1}>
                    Empowering small Event Organizers<br/>
                    Be it Thinkers<br/>
                    More Fiendly. Lorem Iustabasdas
                </div>
                <div className = {classes.Face_1}>
                    Burrra Paajio asltus kem casiofn<br/>
                    Its easier to get lost<br/>
                    More Fiendly. Lorem Iustabasdas
                </div>
                
            </Showcase>
        </div>
    );
}

export default face;