import { AAA } from '../../actions/actionTypes';
import myReducer from '../myReducer';

describe('Tests reducer function', () => {
    
    test('should return increased payload', () => {
        const mock = {
            type: AAA,
            payload: 10
        }
        const state = { myValue: 15 };

        var result = myReducer(state, mock);
        expect(result.myValue).toEqual(25);
    });
})
