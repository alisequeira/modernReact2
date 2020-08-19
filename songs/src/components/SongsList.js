import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
    render() {
        console.log(this.props)
        return <div>Song List</div>
    }
};

const mapStateToProps = (state) => {
    return {songs: state. songs};//it's going to show as props on the class components

};

export default connect(mapStateToProps)(SongList);