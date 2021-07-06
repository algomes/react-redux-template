import { AAA } from '../actions/actionTypes';

const initialState = { myValue: 0 }

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case AAA:
            return {
                myValue: state.myValue += action.payload
            }
        default:
            return state;
    }
}

export default myReducer;