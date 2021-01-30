import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/header/Header';
import Home from './screens/Home';




function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
const App = () => {
  return (
    <>
    
    <Router>
      <div>
       <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
