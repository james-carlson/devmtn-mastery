import axios from 'axios';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadFeed } from '../../ducks/reducer';

class Feed extends Component {

    // This is the componentDidMount lifecycle hook. 
    // It fires when the component mounts. That's technically after the render function. 
    // They fall into several different categories.
    // Mounting: When a component is being created and inserted into the DOM
            // constructor()
            // componentWillMount()
            // render()
            // componentDidMount()
    // Updating: Generally speaking, an update to a component happens when there is a change to props or state.
            // componentWillReceiveProps()
            // shouldComponentUpdate()
            // render()
            // componentDidUpdate()
    // There's also componentWillUnmount and componentDidCatch.
    // ComponentDidMount fires when the DOM has rendered the component. It's usually a good place to put things like
    // calls to an API or other async actions related to the backend, etc. 

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