import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import imagesReducer from './reducers/images';
import rootSaga from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    const store = createStore(imagesReducer, composeEnhancers);
    sagaMiddleware.run(rootSaga);
    /**
     * created store now have redux-saga middleware settled up.
     */

    store.dispatch({ type: 'HELLO_WORLD_SAGA' });
    return store;
};

export default configureStore;
