import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavigationComponent from './navigation/navigation-container';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PortfolioDetail from './portfolio/Portfolio-detail';
import Auth from './pages/auth';
import NoMatch from './pages/no-match';


export default class App extends Component {
  
  
  render() {
    
    return (
      <div className='container'>
        <Router>
          <div>

            
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

       
      </div>
    );
  }
}
