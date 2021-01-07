import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { getUserAction } from '../Redux/Global/Action';
import { HelmetTag } from '../Util/HelmetTag';
import Loader from './Components/MainComponent/Loader';

class App extends Component {
  render() {
    return (
      <div>
        <HelmetTag title="React App" description="React App Boillerplate" />
        <div className="App">Name: {this.props.userData[0].name}</div>
        {renderRoutes(this.props.route.routes)}
        <Loader loading={'Loading...'} />
      </div>
    );
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
