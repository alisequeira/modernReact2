import React from 'react';
import SearchBar from './SearchBar';

    class App extends React.Component{
        constructor(props){
            super(props);
        }

        onSeachSubmit(term){
            console.log(term)
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