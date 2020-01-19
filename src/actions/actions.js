import * as Actions from './constants';

const setImages = images => ({
    type: Actions.LOAD_IMAGES_SUCCESS,
    payload: images,
});

const setLoading = () => ({
    type: Actions.LOAD_IMAGES,
});

const setError = error => ({
    type: Actions.LOAD_IMAGES_ERROR,
    payload: error,
});

export { setImages, setLoading, setError };
