import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Stripe from "./Stripe";

const Footer = ({ match }) => (
    <div>
        <h2>Donate</h2>
        <ul>
            <li>
                {<Link to={`${match.url}/donate/doit`}>Donate to efforts for {match.url.slice(1)}</Link>}
            </li>
        </ul>
        <Switch>
            <Route path={`/${match.url}/donate/doit`} component={Stripe} />
        </Switch>


        {/* <Route path={`${match.url}/:topicId`} component={Donate} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
        const Donate = ({match}) => (
        <div>
            <h3>{match.params.donate}</h3>
        </div>
        ) */}
    </div>
)


export default Footer