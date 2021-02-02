import React, {Component} from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';
import axios from 'axios';
import Spinner from '../../../assets/Spinner/Spinner';

class Posts extends Component{
    state = {
        blogs: this.props.blogs,
        blogsLoaded: true,
        blogsFailed: false,
    }
    componentDidMount(){
        // let fetchUrl = 'https://linttblogs.firebaseio.com/blogOauthor.json';
        // if(this.props.cat){
        //     fetchUrl = 'https://linttblogs.firebaseio.com/blogOcategory.json'
        // }
        
        // axios.get(fetchUrl)
        //     .then(response=>{
        //         this.setState({
        //             blogs: response.data,
        //             blogsLoaded: true,
        //         });
        //     })
        //     .catch(error=>{
        //         this.setState({
        //             blogsFailed: true,
        //             blogsLoaded: true,
        //         })
        //     });
    }

    onClapClickHandler = (ind)=>{
        let prevBlogs = this.state.blogs;
        prevBlogs[this.props.activeAuthorCat].posts[ind].claps++; 
        this.setState({
            blogs: prevBlogs,
        });
        axios.put('https://linttblogs.firebaseio.com/blogOauthor.json',prevBlogs);
    }
    render(){
        let currentAuthor = null;
        if(this.state.blogsLoaded)
            currentAuthor = this.state.blogs[this.props.activeAuthorCat];
        return(
            this.state.blogsLoaded?<div className = {classes.Posts}>
                {currentAuthor.posts?currentAuthor.posts.map((post,ind)=>{
                    return <Post index = {ind} clapClick = {this.onClapClickHandler} key = {ind + Math.random()*10} post = {post}/>
                }):<div>No Posts</div>}
            </div>:<Spinner/>
        );
    }
}
export default Posts;