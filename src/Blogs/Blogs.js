import React, { Component } from 'react';
import Lintt from '../assets/Lintt/Lintt';
import classes from './Blogs.module.css';
import {withRouter} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Showcase3 from '../containers/Showcase3/Showcase3';
import Menu from '../components/Menu/Menu';
import axios from 'axios';
import Spinner from '../assets/Spinner/Spinner';
import LWDN from '../assets/LWDN2/LWDN';

class Blogs extends Component{
    state = {
        showMenu: false,
        blogsLoaded: false,
        showcaseType: 'author',
        blogOauthor: [],
        blogOcategory: [],
    }
    componentDidMount(){
        axios.get('https://linttblogs.firebaseio.com/blogOauthor.json')
             .then(response=>{
                 this.setState({
                     blogOauthor: response.data,
                     blogsLoaded: true,
                 });
             })
             .catch(error=>{
                 alert(error);
             });
        axios.get('https://linttblogs.firebaseio.com/blogOcategory.json')
             .then(response=>{
                 this.setState({
                     blogOcategory: response.data,
                     blogsLoaded: true,
                 });
             })
             .catch(error=>{
                 alert(error);
             });
    }

    backToThirty = ()=>{
        this.props.history.push('/');
    }
    onMenuClickHandler = ()=>{
        this.setState({
            showMenu: true,
        });
    }
    onBackDrop = ()=>{
        this.setState({
            showMenu: false,
        });
    }
    onAuthorType = ()=>{
        this.setState({
            showcaseType: 'author',
        });
    }
    onCategoryType = ()=>{
        this.setState({
            showcaseType: 'category',
        })
    }
    render(){
        let showcase = null;
        if(this.state.blogsLoaded){
            if(this.state.showcaseType === 'author'){
                showcase = <Showcase3 posts author activeSub = {0} subObjects = {this.state.blogOauthor} />;
            }
            else{
                showcase = <Showcase3 cat posts navColor = "#19d3da" activeSub = {0} subObjects = {this.state.blogOcategory} />;
            }
        }
        else{
            showcase = <Spinner />;
        }
        return(
            <div className = {classes.MainWrapper}>
                {this.state.showMenu?<Menu backDrop = {this.onBackDrop} />:null}

                <header className = {classes.HeaderMenu}>
                    <div onClick = {this.backToThirty} className = {classes.LinttButt}>
                        <div className = {classes.LinttContainer}><Lintt /></div>
                    </div>
                    <div onClick = {this.onMenuClickHandler} className = {classes.Menu}><ion-icon name = "menu"/></div>
                </header>

                <div className = {classes.HeroDisplay}>
                    <div>
                        <p className = {classes.HeroText}>About Myself well go fuck ypurself</p>
                    </div>
                    <div>
                        <h4 className = {classes.HeroHeading}>Something That'll Be red</h4>
                    </div>
                </div>

                <div className = {classes.Stick}></div>

                <div className = {classes.BlogsOptions}>
                    <div onClick = {this.onAuthorType} className = {classes.AuthorButt}>Blogs<br/>by<br/>Author</div>
                    <div className = {classes.LWDN}><LWDN /></div>
                    <div onClick = {this.onCategoryType} className = {classes.CategoriesButt}>Blogs<br/>by<br/>Categories</div>
                </div>

                {showcase}

                <Footer shadowTop />
            </div>
        );
    }
}

export default withRouter(Blogs);