import React, { Component } from "react";
import logo from "./logo.svg";
import { AppBar } from "material-ui";
import { Switch, Route } from "react-router-dom";
import Container from "./components/container/Container";
import PrivateRoute from "./components/container/routing/PrivateRoute";
import Login from "./components/login/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/*<Route exact path="/login" component={Login} />
          <Route path="/logintest" component={LoginTest} />
    <Route path="/logout" component={Logout} />*/}
          <PrivateRoute path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
