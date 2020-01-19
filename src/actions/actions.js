import * as Actions from './constants';

const getImages = images => ({
    type: Actions.LOAD_IMAGES,
});

const setImages = images => ({
    type: Actions.LOAD_IMAGES_SUCCESS,
    payload: images,
});

const setError = error => ({
    type: Actions.LOAD_IMAGES_ERROR,
    payload: error,
});

export { getImages, setImages, setError };
