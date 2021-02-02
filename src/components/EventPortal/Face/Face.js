import React, { Component } from 'react';
import classes from './Face.module.css';
import Showcase from '../../../containers/Showcase/Showcase';

class Face extends Component{
    // state = {
    //     face: [],
    //     loaded: false,
    // }
    // componentDidMount(){
    //     axios.get('https://heyy-sector-30.firebaseio.com/event-portal/face.json')
    //     .then(response=>{
    //         this.setState({
    //             face: response.data,
    //             loaded: true
    //         });
    //     })
    //     .catch(err=>{
    //         console.log('error');
    //         return Promise.reject(err);
    //     });
    // }
    render(){
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
}

export default Face;