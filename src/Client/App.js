import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { getUserAction } from '../Redux/Global/Action';

class App extends Component {
  render() {
    return <>{renderRoutes(this.props.route.routes)}</>;
  }
}

function mapStateToProps(state) {
  return {
    userData: state.global.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserAction: () => dispatch(getUserAction()),
  };
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(App),
  loadData,
};

export function loadData({ dispatch }) {
  return dispatch(getUserAction());
}
