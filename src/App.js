import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import CovidInfo from './components/CovidInfo/CovidInfo';
import CGFU from './CGFU/CGFU';
import EventPortal from './components/EventPortal/EventPortal';
import OngoingEvent from './components/OngoingEvent/OngoingEvent';
import Showcase2 from './containers/Showcase2/Showcase2';
import EventForum from './components/EventForum/EventForum';
import KnowMore from './components/KnowMore/KnowMore';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route path = "/CGFU" exact component = {CGFU} />
          <Route path = "/blogs" exact component = {Blogs} />
          <Route path = "/" render = {()=>
            <Layout>

              <CovidInfo/>
              <EventPortal/>

              <Showcase2 activeSub = {2} modules = {['Ongoing Event','Know More','Event Forum']}>

                <OngoingEvent/>
                <KnowMore activeSub = {0} />
                <EventForum />

              </Showcase2>

            </Layout>
          }/>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
