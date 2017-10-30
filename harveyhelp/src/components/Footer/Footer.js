import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Stripe from "./Stripe";
import Feed from '../Feed/Feed';

const Footer = ({ match }) => (
    <div>
                {<Link to={`${match.url}/donate/doit`}>Link using match.url to efforts for {match.url.slice(1)}</Link>}
    </div>
)


export default Footer