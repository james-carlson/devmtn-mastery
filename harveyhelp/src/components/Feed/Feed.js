import axios from 'axios';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadFeed } from '../../ducks/reducer';

class Feed extends Component {
    componentDidMount(){
        this.props.loadFeed();
    }

    render() {
        return (
            <div>
            <div>{this.props.feed ? JSON.stringify(this.props.feed) : "fetching data"}</div>
            {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    loadFeed
}

export default connect(mapStateToProps, outputActions)(Feed)