import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import DetailsContainer from './views/DetailsContainer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:id" render={(props) => (<DetailsContainer {...props}/>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
