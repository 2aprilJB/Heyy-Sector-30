import React from 'react';
import classes from './Face.module.css';
import Showcase from '../../../containers/Showcase/Showcase';

const face = (props)=>{
    return(
        <div className = {classes.Face}>
            <Showcase>
                <div className = {classes.Face_1}>
                    Making Neighbourhood<br/>
                    Its easier to get lost<br/>
                    More Fiendly. Lorem Iustabasdas
                </div>
                <div className = {[classes.Vids, classes.Face_1].join(' ')}>
                    lorem ipsun dolor<br/>
                    Its easier to get lost<br/>
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