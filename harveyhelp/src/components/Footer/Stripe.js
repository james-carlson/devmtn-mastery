import React, { Component } from 'react';

export default class Stripe extends Component {
    render () {
        return (
            <div>
            <div><button>Donate now via Stripe link</button></div>
            {this.props.children}
            </div>
        );
    }
}