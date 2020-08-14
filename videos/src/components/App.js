import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyAW53-kovRD_1NUL-_XLUo6xeA2WLAWams';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {videos: [], SelectedVideo: null};
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

      onVideoSelect = video => {
          console.log( 'from the app', video);
      }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
               <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;