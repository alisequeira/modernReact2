import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component{


    componentDidMount = () => {
        this.props.fetchStreams();
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                    <div className="item" key={stream.id}>
                        <i className="large middle aligned icon camera"/>
                        <div className="content">
                            {stream.title}
                            <div className="description">{stream.description}</div>
                        </div>
                    </div>
            )
        })
    }

    render() {
        return (
                <div>
                    <h2>Streams</h2>
                    <div className="ui celled list">
                        {this.renderList()}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    //object.value is a build in JS function. Take the object as argument
    //all the values from that object are going to be pulled out and inserted into an array
    return {streams: Object.values(state.streams)}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList); 