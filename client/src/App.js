import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
 return (
   <Router>
     <div>
       <Route exact path="/login" component={Login} />
     </div>
   </Router>
 );
}

export default App;
