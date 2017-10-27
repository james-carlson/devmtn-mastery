import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import ContractorList from './components/ContractorList/ContractorList';
import Footer from './components/Footer/Footer';

class App extends Component {

  componentDidMount(){
    // get all of the data and pass it in to the components below
    // at least the list of contractors
  }

  render() {
    return (
      <div>
        <Header />
        <ContractorList />
        <Footer />
      </div>
    );
  }
}

export default App;
