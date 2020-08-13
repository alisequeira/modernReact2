import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

    class App extends React.Component{
        constructor(props){
            super(props);
        }

        async onSeachSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
                params:{
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID 6dl8L01_YsHXJXjoVhcUAg-PKubQCnEtS3n5C78N-rA'
                }
            });
        }

       render() {
           return(
                <div className="ui container" style={{marginTop : '10px'}}>
                    <SearchBar onSubmit={this.onSeachSubmit}/>
                </div>
           );
       };
    }

export default App;