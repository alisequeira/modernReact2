import jsonPlaceholder from '../apis/jsonPlaceholder';
//action creator

export const fetchPosts = () => {
    return async dispatch => {
        const {data} =  await jsonPlaceholder('/posts');
        dispatch({type: 'FETCH_POSTS', payload: data})
    }

};

export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch ({type: 'FETCH_USER', payload: response.data});
    }
}
