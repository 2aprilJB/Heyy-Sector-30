import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import classes from './App.module.css';
import Layout from './containers/Layout/Layout';
import CovidInfo from './components/CovidInfo/CovidInfo';
import CGFU from './CGFU/CGFU';
import EventPortal from './components/EventPortal/EventPortal';
import OngoingEvent from './components/OngoingEvent/OngoingEvent';
import Showcase2 from './containers/Showcase2/Showcase2';
import EventForum from './components/EventForum/EventForum';
import KnowMore from './components/KnowMore/KnowMore';
import Blogs from './Blogs/Blogs';
import Feedback from './containers/Feedback/Feedback';
import HeroMap from './HeroMap/HeroMap';
import EventDetails from './components/OngoingEvent/EventDetails/EventDetails';
import { Component } from 'react';

class App extends Component{
  state = {
    colorScheme:['#c70039','#1eb2a6']
  }

  render(){
    return (
      <div className={classes.App}>
        <BrowserRouter>
          
          <Switch>
            <Route path = "/CGFU" exact component = {CGFU} />
            <Route path = "/blogs" exact component = {Blogs} />
            <Route path = "/HeroMap" exact component = {HeroMap} />
            <Route path = "/EventDetails" exact component = {EventDetails} />
            <Route path = "/" render = {()=>
              <Layout Gandhinagar colors = {this.state.colorScheme}>
  
                <CovidInfo colors = {this.state.colorScheme}/>
                <EventPortal colors = {this.state.colorScheme} />
  
                <Showcase2 colors = {this.state.colorScheme} activeSub = {2} modules = {['Ongoing Event','Know More','Event Forum']}>
  
                  <OngoingEvent/>
                  <KnowMore activeSub = {0} />
                  <EventForum />
  
                </Showcase2>
                
              </Layout>
            }/>
          </Switch>
          <Feedback />  
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
