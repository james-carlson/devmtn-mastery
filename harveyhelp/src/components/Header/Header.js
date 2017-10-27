import React, { Component } from 'react';
import "./Header.css"
import { connect } from 'react-redux';
import { changeDisasterView } from '../../ducks/reducer';

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
                <button id={buttonColor} key={i} onClick={()=>this.clickHandler(i)} name={name}>{name}</button>
            )
        })

        return (
            <div>
            <div>Select a recovery effort: {options}</div>
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