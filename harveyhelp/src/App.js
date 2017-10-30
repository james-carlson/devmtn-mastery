import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ContractorList from './components/ContractorList/ContractorList';
import Feed from './components/Feed/Feed';
import Stripe from './components/Footer/Stripe';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import { Welcome } from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
class App extends Component {

  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" component={Welcome} />
          <Route path={`/:disaster`} component={ContractorList} disaster={this.props.disasterView} />
          <h2>Donate</h2>
        <ul>
            <li>
                {<Link to={`/doit`}>Donate to efforts {this.props.disasterView}</Link>}
            </li>
            <li>
                {<Link to={`/feed`}>See what others are doing right now to help</Link>}
            </li>
        </ul>
        <Switch>
          <Route render={(props) => {
          return <div><Feed /></div>}} path={`/feed/`}  />
          <Route component={Stripe} path={`/doit/`}  />
        </Switch>
        {/* <Stripe />
        <Feed /> */}
        
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