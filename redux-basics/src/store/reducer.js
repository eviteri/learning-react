import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //concat returns a new array no the old one
                results: state.results.concat({id: new Date() , value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
        // const id = 2;
        // const newArray = [...state.results];
        //       newArray.splice(id, 1);

        //filter returns a new array doest touch the oldone. Takes a function as an input which is executed in every element in the array
        //and checks if fullfills a certain condition
        const updatedArray = state.results.filter( (result) => result.id !== action.resultElId )
        console.log(updatedArray)
            return{
                ...state,
                results: updatedArray
            }
        default: 
            return state;

    }
};

export default reducer;