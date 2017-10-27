import React, { Component } from 'react';
import NavButton from './NavButton/NavButton';

export default class Header extends Component {
    render () {
        return (
            <div>Header
                <br/>
                <NavButton />
            </div>
        );
    }
}