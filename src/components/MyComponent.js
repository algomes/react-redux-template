import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../services/posts';
import { myAction } from '../redux/actions/action';

const MyComponent = () => {

    /* While enzyme doesn't have a soluction for mocking react hooks
     * It is recommended to use React.useState ir order to be able to mock it in tests
    */
    const [posts, setPosts] = React.useState([]);
    const dispatch = useDispatch();
    const result = useSelector(state =>  state.myReducer.myValue );

    useEffect(() => {
        fetchPosts().then(result => setPosts(result.data));
    }, []);

    return (
        <div>
            <h1>This is a redux result: {result}</h1>
            <button id="btn_increment" onClick={() => dispatch(myAction())}>Click to Increment</button>
            {
                // posts.length > 1 &&
                posts.map(post => <li id='liEment' key={post.id}>{post.title}</li>)
            }
        </div>
    )
}

export default MyComponent;
