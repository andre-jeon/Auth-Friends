import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';
// import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <ul>
            <Link to='/login'>Login</Link>
          </ul>
          <ul>
            <Link to='/protected'>Friends List</Link>
          </ul>
        </ul>
        <Switch>
          {/* <PrivateRoute path='/protected' component={FriendsList} /> */}
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;