import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'Wind of Change',band: 'Scorpions', duration: '4:42'},
        {title: 'Paranoid', band: 'Black Sabbath', duration: '2:52'},
        {title: 'Crazy Train', singer: 'Ozzy Osburne', duration: '4:57'},
        {title: 'have you ever seen the rain', band: 'Creedence Clearwater Revival', duration: '2:47'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONGS_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});