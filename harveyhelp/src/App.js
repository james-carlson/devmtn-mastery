import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ContractorList from './components/ContractorList/ContractorList';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    // get all of the data and pass it in to the components below
    // at least the list of contractors
  }

  

  render() {
    return (
      <div>
        <Header />
        <ContractorList disaster={this.props.disasterView} />
        <Footer />
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