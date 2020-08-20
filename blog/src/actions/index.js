import jsonPlaceholder from '../apis/jsonPlaceholder';
//action creator

export const fetchPosts = () => {
    return async dispatch => {
        const response =  await jsonPlaceholder('/posts');
        dispatch({type: 'FETCH_POST', payload: response})
    }

};

