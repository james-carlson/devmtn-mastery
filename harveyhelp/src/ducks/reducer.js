import axios from 'axios';


let initialState = {
    disasterView: null,
    contractors: [{name: "Bill and Ted"}, {name: "Mike and Rob"},{name: "ABC Company"}, {name: "Blah Blah Blah"}]
}


// ACTION NAMES
const CHANGE_DISASTER_VIEW = "CHANGE_DISASTER_VIEW"
const GET_CONTRACTORS = "GET_CONTRACTORS"

// REDUCER 
export default function reducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case CHANGE_DISASTER_VIEW:
            return Object.assign({}, state, { disasterView: action.payload })
        case GET_CONTRACTORS + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        default:
            return state
    }
}

// ACTION CREATORS
export function getContractors(val) {
    return {
        type: GET_CONTRACTORS,
        payload: val
    }
}

export function changeDisasterView(val) {
    return {
        type: CHANGE_DISASTER_VIEW,
        payload: val
    }
}
