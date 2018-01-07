import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBarContainer from './navbar-container';
import { loadTestApi, loadLogOut } from '../actions';
import MainComponent from '../components';
import { AppNav, IsLogged } from '../components/lib';

/* eslint no-use-before-define: ["error", { "functions": false }] */
@connect(mapStateToProps, { loadTestApi, loadLogOut })
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }


  handleLogOut() {
    this.props.loadLogOut();
  }

  render() {
    console.log(this.props);
    const { result, loadTestApi, isLoginAuthenticated } = this.props;

    return (
      <div>
        <NavBarContainer isPublicRoute />
        <MainComponent
          linkDaftar="/daftar"
          linkLogin="/login"
          testApi={loadTestApi}
          dataResponse={result}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.callApi,
  };
}


export default (App);

