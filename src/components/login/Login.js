import { Route, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CredentialsPrompt from "./CredentialsPrompt";
import { sendCredentials } from "../../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    sendCredentials("tet", "etet");
  }

  render() {
    let content;
    if (!this.props.credentialsSuccess) {
      content = <CredentialsPrompt />;
    } else {
    }
    return <div> {content} </div>;
  }
}

Login.defaultProps = {};

Login.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
