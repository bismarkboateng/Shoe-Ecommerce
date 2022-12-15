import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <SignUp />} />
          </Routes>    
      </div>
    </Router>
  );
}

export default App;