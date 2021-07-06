import { AAA } from '../actionTypes';
import { myAction } from '../action';

describe('myAction', () => {
    test('should return correct action payload', () => {
        const result = myAction();
        expect(result.payload).toEqual(10);
    })

    test('should return correct action type', () => {
        const result = myAction();
        expect(result.type).toEqual(AAA);
    })
});