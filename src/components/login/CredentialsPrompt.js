import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { sendCredentials } from "../../actions/authActions";
import { bindActionCreators } from "redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CredentialsPrompt = props => {
  const style = {
    margin: "auto",
    marginTop: "10%",
    textAlign: "center",
    margin: "auto"
  };
  const styleButton = { marginTop: "10px" };
  let email, password;
  return (
    <div style={style}>
      <TextField
        ref={r => (email = r)}
        hintText="email"
        errorText={props.emailError}
      />
      <br />
      <TextField
        ref={r => (password = r)}
        hintText="password"
        errorText={props.passwordError}
        type="password"
      />
      <br />
      <div>
        {!props.busy && (
          <RaisedButton
            label="Login"
            primary={true}
            style={styleButton}
            onClick={() =>
              props.actionCb(email.input.value, password.input.value)
            }
          />
        )}
        {props.busy && (
          <div>
            <CircularProgress style={styleButton} />
          </div>
        )}
      </div>
    </div>
  );
};

CredentialsPrompt.propTypes = {
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  actionCb: PropTypes.func
};

CredentialsPrompt.defaultProps = {
  emailError: "",
  passwordError: ""
};

const mapStateToProps = (state, ownProps) => {
  return {
    emailError: state.auth.emailError,
    passwordError: state.auth.passwordError,
    busy: state.auth.waiting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionCb: bindActionCreators(sendCredentials, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CredentialsPrompt)
);
