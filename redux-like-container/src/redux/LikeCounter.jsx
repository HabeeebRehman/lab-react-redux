import {legacy_createStore} from'redux';
import React from 'react';
import reducer from './Reducer'
import { useState } from 'react'; 
import { incrementLike, decrementLike } from './Action';


const store = legacy_createStore(reducer);

const likeCounter = () => {
    // const {count } = store.getState();
    const [count, setCount] = useState(store.getState().count);

    store.subscribe(() => {
        setCount(store.getState().count);
    });

    const handelLike = () => {
        store.dispatch(incrementLike());
    };
    const handelUnLike = () => {
        store.dispatch(decrementLike());
    };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handelLike}>Like</button>
            <button onClick={handelUnLike}>Unlike</button>
        </div>
    )
};
export default likeCounter;