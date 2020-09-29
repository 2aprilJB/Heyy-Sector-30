import React, { Component } from 'react';
import Alerts from './Alerts/Alerts';
import About from './About/About';
import classes from './Showcase3.module.css';

class Showcase3 extends Component{
    state = {
        activeSubject: this.props.activeSub,       //This is Active Subject's Index
        KnowMore: [
            {
                subject: 'Kendriya Vidyalaya',
                navImage: 'https://mapio.net/images-p/58152916.jpg',
                about: {
                    aboutImage: 'https://mapio.net/images-p/58152916.jpg',
                    info: <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>,
                },
            },
            {
                subject: 'Sant Nirankari',
                navImage: 'https://i.pinimg.com/564x/a2/fc/b7/a2fcb7f2ac01fba1ff8eb74a0e4389e7.jpg',
                alerts: [
                    {
                        imageContent: null,
                        info: 'Samay AAta hai!'
                    },
                    {
                        info: 'Yes Time Bilkul aat hai isi bewkoof ko dekh le'
                    }
                ],
                about: {
                    aboutImage: 'https://i.pinimg.com/564x/a2/fc/b7/a2fcb7f2ac01fba1ff8eb74a0e4389e7.jpg',
                    info: 'asdsadhi se ae ajnabi tu bhi kabhi awaaz kahi se mein yah tukdo mein jee rha hu mein yah tukdo mein jee.',
                },
            }
        ],
    }
    activeSubjectHandler = (index)=>{    //Updates ActiveSubject index on click of navigation element
        this.setState({
            activeSubject: index,
        })
    }
    render(){
        let activeSub = this.state.activeSubject;
        let KnowMore = this.state.KnowMore;
        return(
            <div className = {classes.Showcase}>
                <nav className = {classes.NavBar}>
                    {this.state.KnowMore.map((subject,ind)=><li key = {subject + ind} onClick = {()=>this.activeSubjectHandler(ind)} style = {activeSub===ind?{boxShadow:'0px 0px 8px #000', border: '4px solid  #c90808',backgroundImage: 'url(' + subject.navImage + ')'}:{backgroundImage: 'url(' + subject.navImage + ')'}}></li>)}
                </nav>
                <h3 className = {classes.SubjectName}>{KnowMore[activeSub].subject}</h3>
                <div className = {classes.StylingLine}></div>
                <Alerts alerts = {KnowMore[activeSub].alerts} />
                <About about = {KnowMore[activeSub].about} />     
            </div>
        );
    }
}

export default Showcase3;

