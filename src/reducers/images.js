import * as Actions from '../actions';

const initialState = {
    images: [],
    isLoading: false,
    error: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Actions.LOAD_IMAGES:
            return { ...state, isLoading: true };
        case Actions.LOAD_IMAGES_SUCCESS:
            return { ...state, isLoading: false, images: payload };
        case Actions.LOAD_IMAGES_ERROR:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};
