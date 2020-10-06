import React, { Component } from 'react';
import Showcase from '../../containers/Showcase/Showcase';
import classes from './EventForum.module.css';
import SubmitIdea from './SubmitIdea/SubmitIdea';

class EventForum extends Component{
    state = {
        anyIdea: false,
        ideas: [
            {
                name: 'Some Event',
                breif: 'Spit shit too hit no grit, make sslit rip it grip it dont let it slip dont let it slip no no',
                author: 'Jamuna Das Patel',
                date: '12/10/20',
            },
            {
                name: 'Many Event',
                breif: 'Spit shit too hit no grit, make sslit rip it grip it dont let it slip dont let it slip no no',
                author: 'Hirla Bhai Motwani',
                date: '16/11/20',
            },
        ],
    }
    ideaButtClickHandler = ()=>{
        let prevIdea = this.state.anyIdea;
        this.setState({
            anyIdea: !prevIdea,
        });
    }
    render(){
        return(
            <div className = {classes.EventForum}>
                <div className = {classes.Ideation}>
                    <div className = {classes.IdeaButt}>
                        Any Idea?
                        <div onClick = {this.ideaButtClickHandler} className = {classes.AnyIdeaButt}>+</div>
                    </div>
                    {this.state.anyIdea?<SubmitIdea />:null}
                </div>
                <div className = {classes.IdeaShowcase}>
                    <Showcase>
                        {this.state.ideas.map(idea=>{
                            return 
                        })}
                    </Showcase>
                </div>
            </div>
        );
    }
}

export default EventForum;