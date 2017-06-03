/*import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Resume from './containers/Resume/Resume';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/resume" component={Resume}></Route>
    </Route>
  </Router>
);*/

import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Resume from './containers/Resume/Resume';
import Contacts from './containers/Contacts/Contacts';

Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contacts" component={Contacts}/>
    </Route>
  </Router>
);