import {useState, useEffect}from 'react';
import Youtube from '../apis/Youtube';
const KEY = 'AIzaSyAW53-kovRD_1NUL-_XLUo6xeA2WLAWams';

const useVideos = (defaultSearchTerm) => {
    const[videos, setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    
    const search = async (term) => {
        const response = await Youtube.get("/search", {
             params: {
               q: term,
               part: "snippet",
               maxResults: 5,
               key: KEY
             }
           });

           setVideos(response.data.items);
         };
         return [videos, search];
}


export default useVideos;