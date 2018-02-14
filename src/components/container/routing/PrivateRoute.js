import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends PureComponent {
  render() {
    //this.props.test();
    return (
      <Route
        exact={this.props.exact}
        path={this.props.path}
        render={() => {
          if (this.props.requiredLevel === "") {
            return React.createElement(this.props.component, this.props);
          }
          return (
            <Redirect
              to={{
                pathname: "/login"
              }}
              push
            />
          );
        }}
      />
    );
  }
}

const { bool, string, func } = PropTypes;

PrivateRoute.defaultProps = {
  exact: false,
  requiredLevel: ""
};

PrivateRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  requiredLevel: string
};

export default PrivateRoute;
