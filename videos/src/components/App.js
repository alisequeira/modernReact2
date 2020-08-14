import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyAW53-kovRD_1NUL-_XLUo6xeA2WLAWams';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {videos: []};
    }

    onTermSubmit = async term => {
     const response = await Youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            key: KEY
          }
        });

        this.setState({videos: response.data.items});
      };

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
               <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;