import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

          </Switch>    
      </div>
    </Router>
  );
}

export default App;