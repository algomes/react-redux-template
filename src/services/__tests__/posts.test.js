// #### MOCK AXIOS USING MOCK ADAPTER ####
// import MockAdapter from 'axios-mock-adapter';
// var mock = new MockAdapter(axios);
// mock.onGet("https://jsonplaceholder.typicode.com/posts").reply(200, expected);
// var response = await axios.get("https://jsonplaceholder.typicode.com/posts");

// expect(response.data).toEqual(expected);
// #### END MOCK AXIOS ####

import axios from 'axios';
import { fetchPosts } from '../posts';

jest.mock('axios');
describe('Test fetchPosts', () => {
    it('should return value', async () => {

    const expected = [{
        id: 1,
        title: "testTitle",
    }];
    
    axios.get.mockImplementationOnce(() => Promise.resolve(expected));
    await expect(fetchPosts()).resolves.toEqual(expected);
        
    })
    
    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
     
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );
     
        await expect(fetchPosts()).rejects.toThrow(errorMessage);
    });

});