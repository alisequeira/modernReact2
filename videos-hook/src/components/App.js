import React, {useState, useEffect}from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'


const KEY = 'AIzaSyAW53-kovRD_1NUL-_XLUo6xeA2WLAWams';

const App = () => {
    const[videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState(null);

    useEffect(()=>{
        onTermSubmit('buildings');
    }, []);

    const onTermSubmit = async (term) => {
        const response = await Youtube.get("/search", {
             params: {
               q: term,
               part: "snippet",
               maxResults: 5,
               key: KEY
             }
           });

           setVideos(response.data.items);
           setSelectedVideos(response.data.items[0]);
         };

       const  onVideoSelect = video => {
           setSelectedVideos(video)
         }

         return(
            <div className="ui container">
                <SearchBar onFormSubmit={onTermSubmit}/>
                <div className="ui grid">
                    <div className = "ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideos} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default App;