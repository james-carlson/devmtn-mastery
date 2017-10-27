import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ContractorList from './components/ContractorList/ContractorList';

import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import { Welcome } from './components/Welcome/Welcome';

class App extends Component {

  componentDidMount() {
    // get all of the data and pass it in to the components below
    // at least the list of contractors
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Welcome} />
        <Route path={`/:disaster`} component={ContractorList} disaster={this.props.disasterView} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state
}

const outputActions = {

}

export default connect(mapStateToProps, outputActions)(App)