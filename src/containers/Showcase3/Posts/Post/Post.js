import React, { Component } from 'react';
import Modal from '../../../../hoc/Modal/Modal';
import ClapIcon from '../../../../assets/Clap/Clap';
import classes from './Post.module.css';

class Post extends Component{
    state = {
        showModal: false,
    }
    forModal = ()=>{
        this.setState({
            showModal: !this.state.showModal,
        });
        console.log(this.state);
    }
    render(){
        let postObj = this.props.post;
        return(
            <div style = {this.props.noBox?{'boxShadow': '0px 0px 0px'}:null} className = {classes.Post}>
                {this.props.noClaps?null:<div className = {classes.Claps}>
                    <button onClick = {()=>this.props.clapClick(this.props.index)} className = {classes.ClapButt}><ClapIcon /></button>
                    <div className = {classes.Counter}>{postObj.claps}</div>
                </div>}

                <h3 className = {classes.Title}>{postObj.title}</h3>
                <div onClick = {this.forModal} style = {{backgroundImage: 'url(' + postObj.postHeroImg + ')'}} className = {classes.PostHeroImg}></div>
                <p className = {classes.Brief}>{postObj.brief}</p>

                <div className = {classes.DateShare}>
                    <h5 className = {classes.Date}>{postObj.date}</h5>
                    <div className = {classes.Share}>{/*If in future*/}</div>
                </div>
                <div onClick = {this.forModal} className = {classes.Expand}><ion-icon name = "expand" /></div>
                {this.state.showModal?<Modal show = {this.state.showModal} onBackDrop = {this.forModal} >{postObj.fullPost}</Modal>:null}
            </div>
        );
    }
}
export default Post;