import React, { Component } from 'react';
import classes from './Showcase2.module.css';
/*How to USE??

---Give it 'modules' prop, that'll be an array of Module's names you want to show with it
---And Make sure there are at least two children inside*/

/*---------For-Customizations----------
-->'Tab' class can be modified
-->'ActiveTab can be modified'*/
class Showcase2 extends Component{
    state = {
        activeContent: this.props.children[this.props.activeSub],
        activeIndex: this.props.activeSub,
        tabClasses: [classes.Tab,classes.ActiveTab],
        clicks: 1,
    }
    onClickHandler = (toRender,index)=>{
        let clickCount = this.state.clicks;
        let tabClasses = [classes.Tab];
        tabClasses.push(classes.ActiveTab);
        
        this.setState({
            activeContent: toRender,
            clicks: clickCount,
            activeIndex: index,
            tabClasses: tabClasses,
        });
    }
    render(){
        return(
            <div className = {classes.Showcase2}>
                {this.props.children.map((module,ind)=>{
                    return (
                        <div className = {classes.Showing} key = {'showing_' + ind}>
                            <div onClick = {()=>this.onClickHandler(module,ind)} className = {ind===this.state.activeIndex?this.state.tabClasses.join(' '):classes.Tab}>
                                <div className = {classes.PlusMinusContainer}>
                                    <div className = {classes.PlusMinus}></div>
                                </div>    
                                <div className = {classes.ContentName}>{this.props.modules[ind]}</div>
                            </div>
                            {ind === this.state.activeIndex?(this.state.activeContent ? this.state.activeContent : null):null}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Showcase2;