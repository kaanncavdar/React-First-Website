import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import games from "./data/myData";
function App() {
  const Links = games.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <Router>
      <Navbar games={games} />
      <div className="container">
        <div className="row text-center">
          <Switch>{Links}</Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
