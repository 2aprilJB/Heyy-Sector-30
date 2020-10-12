import React, { Component } from 'react';
import Showcase from '../../containers/Showcase/Showcase';
import classes from './EventForum.module.css';
import SubmitIdea from './SubmitIdea/SubmitIdea';
import ShowSupportIdea from './ShowSupportIdea/ShowSupportIdea';
import Spinner from '../../assets/Spinner/Spinner';
import axios from 'axios';

class EventForum extends Component{
    state = {
        anyIdea: false,
        disableAnyIdea: false,
        loaded: false,
        ideas: [],
    }
    componentDidMount(){
        axios.get('https://heyy-sector-30.firebaseio.com/event-forum/ideas.json')
             .then(response=>{
                 this.setState({
                     ideas: response.data,
                     loaded: true,
                 });
             })
             .catch(error=>{
                 alert(error);
                 return Promise.reject(error);
             })
    }
    ideaButtClickHandler = ()=>{
        this.setState({
            anyIdea: true,
        });
    }
    submitButtClickHandler = ()=>{
        this.setState({
            anyIdea: false,
            disableAnyIdea: true,
        })
    }
    render(){
        return(
            <div className = {classes.EventForum}>
                <div className = {classes.Ideation}>
                    <div className = {classes.IdeaButt}>
                        Any Idea?
                        {this.state.disableAnyIdea?null:<div onClick = {this.ideaButtClickHandler} className = {classes.AnyIdeaButt}>+</div>}
                    </div>
                    {this.state.anyIdea?<SubmitIdea onSubmission = {this.submitButtClickHandler} />:null}
                </div>
                <div className = {classes.IdeaShowcase}>
                    {this.state.loaded?

                        <Showcase top>
                            {this.state.ideas.map((idea,ind)=>{
                                return <ShowSupportIdea key = {ind + 'showNsupport'} idea = {idea} />
                            })}
                        </Showcase>

                    :<Spinner/>}
                </div>
            </div>
        );
    }
}

export default EventForum;