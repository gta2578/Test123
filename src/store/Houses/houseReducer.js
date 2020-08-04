import { HOUSES } from "./types.js"



const initialState = {
    housesList: {items:[]}
}

const home = (state = initialState, action) => {
    switch(action.type) {
        case HOUSES.GET:
        return {...state, housesList: action.payload};
        default:
        return state;
    }
}

export default home;

