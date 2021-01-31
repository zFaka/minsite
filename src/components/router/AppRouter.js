import React from 'react';
import {
  BrowserHistory as Router, 
  Switch,
  HashRouter, 
  Redirect,
  Route,
} from "react-router-dom";
import {FullpageTemplate} from '../FullpageTemplate';
import BioScreen from '../screens/bio/BioScreen';
import {BlogScreen} from '../screens/blog/BlogScreen';
import {ProjectsScreen} from '../screens/projects/ProjectsScreen';


export const AppRouter = () => {

  return (
    <Router>
      <div>
          <HashRouter>
          <Route 
            exact 
            path="/blog" 
            component={BlogScreen}
          />

          <Route 
            exact 
            path="/projects" 
            component={ProjectsScreen}
          />

          <Route 
            exact 
            path="/bio" 
            component={BioScreen}
          />

          <Route 
            exact 
            path="/" 
            component={FullpageTemplate}
          />

          <Redirect to='/'/>
          </HashRouter>
      </div>
    </Router>
  )}
