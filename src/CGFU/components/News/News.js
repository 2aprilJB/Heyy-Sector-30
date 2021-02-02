import React, { Component } from 'react';
import Spinner from '../../../assets/Spinner/Spinner';
import Showcase from '../../../containers/Showcase/Showcase';
import Post from '../../../containers/Showcase3/Posts/Post/Post';
import classes from './News.module.css';
import axios from 'axios';

class News extends Component{
    state = {
        loaded: false,
        posts: null,
    }
    componentDidMount(){
        axios.get('https://linttnewz-default-rtdb.firebaseio.com/posts.json')
             .then(response=>{
                 this.setState({
                     posts: response.data,
                     loaded: true,
                 });
             })
             .catch(error=>{
                 console.log('OOPS..you got an error:' + error);
             });
    }
    render(){
        return(
            <div className = {classes.NewsSection}>
                {this.state.loaded?<Showcase small top>
                    {this.state.posts.map((post,ind)=>{
                        return <Post noBox noClaps index = {ind} key = {ind} post = {post} />
                    })}
                </Showcase>:<Spinner/>}
            </div>
        );
    }
}

export default News;