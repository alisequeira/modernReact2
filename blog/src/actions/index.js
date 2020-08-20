import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'loadsh';
//action creator

export const fetchPosts = () => {
    return async dispatch => {
        const {data} =  await jsonPlaceholder('/posts');
        dispatch({type: 'FETCH_POSTS', payload: data})
    }

};

export const fetchUser = (id) => {
    return dispatch => {
        _fetchUser(id, dispatch);
    }
}

//using memoize 

const _fetchUser =_.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch ({type: 'FETCH_USER', payload: response.data});
})