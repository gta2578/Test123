import { HOUSES } from "./types.js"

export const setHouses = data => ({
    type: HOUSES.GET,
    payload: data
});

export const getHouses = () => dispatch => {
    fetch('https://api.jqestate.ru/v1/properties/country?pagination[limit]=70&pagination[offset]=160')
    .then(res => res.json())
    .then((data) => dispatch(setHouses(data)))
}
    
    