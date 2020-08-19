//Action creator
export const selectSong = (song) => {
    //Return an action
    return{
        type: 'SONGS_SELECTED',
        payload: song
    };
};

