import React from 'react';
import {connect} from 'react-redux';


const SongDetail = ({selectedSong})  => {
    
    if(!selectedSong){
        return <div> Select a song</div>
    }
    let type= selectedSong.hasOwnProperty('band') ? 'band' : 'singer';
    return (
                <div>
                    <h3>Details For:</h3>
                    <p>
                       Title: {selectedSong.title}
                       <br/>
                       Duration: {selectedSong.duration}
                       <br/>
                       {`${type}: ${selectedSong[type]}`}
                    </p>
                </div>
            )
};

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);