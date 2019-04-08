import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Instructions from './containers/Instructions/Instructions';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <ul className="navigation">
            <li><NavLink exact to="/" activeClassName="active-link">Instructions</NavLink></li>
            <li><NavLink to="/users" activeClassName="active-link">Users</NavLink></li>
            <li><NavLink to="/courses" activeClassName="active-link">Courses</NavLink></li>
          </ul>
          <Switch>
            <Route path="/users" component={Users} />
            {/*<Route path="/courses/:id" component={Course} />*/}
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/" component={Instructions} />
            
            <Route render={ () => <h1>Page not found</h1>} />
          </Switch>

          </div>

        

      </BrowserRouter>

    );
  }
}

export default App;
