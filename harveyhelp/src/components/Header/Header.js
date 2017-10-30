import React, { Component } from 'react';
import "./Header.css"
import { connect } from 'react-redux';
import { changeDisasterView } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentButton: null
        }

        this.clickHandler = this.clickHandler.bind(this)
        this.disasters = [{id: 1, name: "Hurricane Harvey"}, {id: 2, name: "Hurricane Irma"}, {id: 3, name: "Earthquakes in Mexico"}, {id: 4, name:"Fires in Northern California"}]
    }


    clickHandler(i) {
        console.log(i)
        this.setState({
            currentButton: i
        })
        this.props.changeDisasterView(this.disasters[i].name)
        
    }

    render () {
        const options = this.disasters.map((disaster, i) => {
            const {name} = disaster
            let buttonColor = this.state.currentButton === i ? "selected" : ""
            return(
                <div className="headerFlex"><Link key={i} to={`/${this.disasters[i].name}`}><button id={buttonColor} onClick={()=>this.clickHandler(i)} name={name}>{name}</button></Link></div>
            )
        })

        return (
            <div className="headerFlex">
            <div className="headerFlex">Select a recovery effort: {options}</div>
            <div><button className="admin" disabled>Remove Disaster (currently disabled)</button></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    changeDisasterView,
}

export default connect(mapStateToProps, outputActions)(Header)