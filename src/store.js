import { createStore } from 'redux';
import imagesReducer from './reducers/images';

export default createStore(
    imagesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
