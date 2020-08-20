import jsonPlaceholder from '../apis/jsonPlaceholder';
//action creator

export const fetchPosts = () => {
    return async dispatch => {
        const {data} =  await jsonPlaceholder('/posts');
        dispatch({type: 'FETCH_POSTS', payload: data})
    }

};

