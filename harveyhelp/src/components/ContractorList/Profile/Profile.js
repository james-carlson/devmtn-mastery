import React, { Component } from 'react';
import { VoteBox } from './VoteBox/VoteBox';

export default class Profile extends Component {
    render () {
        return (
            <div>Profile<br/><VoteBox contractors={this.props.contractors} /></div>
        );
    }
}