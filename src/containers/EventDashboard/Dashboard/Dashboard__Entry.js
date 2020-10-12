import React, {Component} from 'react';
import classes from './Dashboard__Entry.module.css';
import ClapNCount from './ClapNCount/ClapNCount';
import Modal from '../../../hoc/Modal/Modal';

class Dashboard extends Component{
    state = {
        showModal: false,
    }
    forModal = ()=>{
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    render(){
        return(
            <div className = {classes.Entry} style = {{backgroundImage: "url(" + this.props.entry.entryUrl + ")"}}>
                <div className = {classes.TopDiv}>
                    <div className = {classes.Rank}>#{this.props.rank}</div>
                    <div onClick = {this.forModal} className = {classes.PopOut}><ion-icon name = "open-outline"/></div>
                </div>
                <div className = {classes.BottomDiv}>
                    <div className = {classes.EntryName}>{this.props.entry.entryName}</div>
                    <ClapNCount clapClick = {this.props.clapClick} entry = {this.props.entry} rank = {this.props.rank} />
                    <div className = {classes.Upvotes}>
                        <button className = {classes.Upvotes_button}><ion-icon name = "arrow-up"/></button>
                        <div className = {classes.Upvote_count}>{this.props.entry.upVotes}</div>
                    </div>
                </div>
                {this.state.showModal?<Modal show = {this.state.showModal} onBackDrop = {this.forModal}><div style = {{backgroundImage: "url(" + this.props.entry.entryUrl + ")"}} className = {classes.FullEntry}></div></Modal>:null}
            </div>
        );
    }
}

export default Dashboard;



