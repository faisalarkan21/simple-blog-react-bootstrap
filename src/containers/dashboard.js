import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { AppNav } from '../components/lib';
import NavBarContainer from './navbar-container';
import { loadLogOut, loadCheckAuth } from '../actions';
import { connect } from 'react-redux';

import DashboardComponent from '../components/dashboard-component';

/* eslint no-use-before-define: ["error", { "functions": false }] */
@connect(mapStateToProps, { loadLogOut, loadCheckAuth })
@withRouter
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.props.loadCheckAuth();
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    const { result } = nextProps;

    if (!result.isLoginAuthenticated) {
      this.props.history.push(result.location);
    }
  }

  handleLogOut() {
    this.props.loadLogOut();
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <DashboardComponent logOut={this.handleLogOut} />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.loginAuth,
  };
}


export default Dashboard;

