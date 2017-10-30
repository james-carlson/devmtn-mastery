import axios from 'axios';


let initialState = {
    disasterView: null,
    contractors: [],
    feed: ''
}


// ACTION NAMES
const CHANGE_DISASTER_VIEW = "CHANGE_DISASTER_VIEW"
const GET_CONTRACTORS = "GET_CONTRACTORS"
const LOAD_FEED = "LOAD_FEED"
const DELETE_CONTRACTOR = "DELETE_CONTRACTOR"

// REDUCER 
export default function reducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case CHANGE_DISASTER_VIEW:
            return Object.assign({}, state, { disasterView: action.payload })
        case GET_CONTRACTORS + '_FULFILLED':
            return Object.assign({}, state, { contractors: action.payload })
        case LOAD_FEED + '_FULFILLED':
            return Object.assign({}, state, { feed: action.payload})
        case DELETE_CONTRACTOR + '_FULFILLED':
            return Object.assign({}, state, { feed: action.payload})
        default:
            return state
    }
}

// ACTION CREATORS
export function getContractors() {
    return {
        type: GET_CONTRACTORS,
        payload: axios.get("http://localhost:3005/api/data/contractors").then(res => {
            return res.data})
    }
}

export function changeDisasterView(val) {
    return {
        type: CHANGE_DISASTER_VIEW,
        payload: val
    }
}

export function loadFeed() {
    return {
        type: LOAD_FEED,
        payload: axios.get("https://api.reliefweb.int/v1/reports?appname=apidoc&limit=2").then(res => {
            return res.data.data})
    }
}

export function deleteContractor(yup) {
    return {
        type: DELETE_CONTRACTOR,
        payload: axios.delete(`http://localhost:3005/api/data/delete/contractors/${yup}`).then(res => {
            return res.data})
    }
}