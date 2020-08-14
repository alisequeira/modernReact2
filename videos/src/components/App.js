import React from 'react';
import SeachBar from './SearchBar';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SeachBar/>
            </div>
        );
    }
}

export default App;