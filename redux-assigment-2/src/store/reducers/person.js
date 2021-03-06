import * as actionTypes from '../actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_USER:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.payLoad.name,
                age: action.payLoad.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };

        case actionTypes.DELETE_USER:
            console.log(action);
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.id)
            };
        default: 
            return state;

    }

};

export default reducer;