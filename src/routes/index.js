import React from 'react'
import { Router, Route, Link,browserHistory, hashHistory, IndexRoute } from 'react-router'

import App from '../layouts/App'
import Home from '../containers/Home'
import About from '../containers/About'
import Skill from '../containers/Skill'
import Project from '../containers/Project'
import Github from '../containers/Github'
import Contact from '../containers/Contact'

export default (
  <Router history={hashHistory} >
      <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="skill" component={Skill} />
          <Route path="project" component={Project} />
          <Route path="github" component={Github} />
          <Route path="contact" component={Contact} />
      </Route>
  </Router>
)
