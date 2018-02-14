import "./App.css";

import { Route, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";

import RaisedButton from "material-ui/RaisedButton";
//import TextField from 'material-ui/TextField';
import TextField from "./TextField";
import { connect } from "react-redux";
import DialogButton from "./DialogButton";
import translate from "./translate";
import TeamLogin from "./TeamLogin";
import DeviceLogin from "./DeviceLogin";
import Alert from "./Alert";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      response: "",
      logout: false,
      sessionClosed: false,
      disabled: false,
      error: false,
      team: "",
      reroute: "/default"
    };
    if (props.location.state) {
      this.setState({
        logou: props.location.state.logout,
        sessionClosed: props.location.state.sessionClosed
      });
      this.setState({ reroute: props.location.state.reroute });
    }
    console.log(props, this.state);
  }

  componentWillMount() {
    localStorage.setItem("email", this.props.match.params.email);
  }

  handleRequestClose = () => {
    this.setState({ logout: false, sessionClosed: false });
    localStorage.removeItem("loginout");
    localStorage.removeItem("sessionClosed");
  };

  render() {
    this.t = this.props.translate;
    let content = null;

    <DeviceLogin />;

    return <div>{content} </div>;
  }
}

Login.defaultProps = {
  reroute: "/",
  team: ""
};

Login.propTypes = {
  translate: React.PropTypes.func.isRequired,
  team: React.PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    reroute: state.setReroute.reroute,
    team: state.auth.team
  };
}

export default withRouter(connect(mapStateToProps)(translate(Login)));
