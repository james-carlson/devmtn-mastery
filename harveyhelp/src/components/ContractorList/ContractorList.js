import React, { Component } from 'react';
import Profile from './Profile/Profile';
import { connect } from 'react-redux';


class ContractorList extends Component {
    constructor(props) {
        super(props)

        this.disasterName = (props) => {
            return (
                this.props.disasterView ? <h1>{this.props.disasterView}</h1> : "No disaster selected."
            )
        }

    }
    render() {
        return (
            <div>
                {this.disasterName()}
                <br />
                <Profile {...this.props}/></div>
        );
    }
}

function mapStateToProps(state) {
    return state
  }
  
  const outputActions = {
  
  }
  
  export default connect(mapStateToProps, outputActions)(ContractorList)