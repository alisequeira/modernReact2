import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        //THIS IS THE ONLY TIME WE DO DIRECT  ASSIGMENT TO this.state
        this.state = {latitude: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) =>{//To update state we call setState method!!!!!!!!!!
                this.setState({latitude: position.coords.latitude})
                //WE DID NOT this.state.latitude = position.coords.latitude;
            },
            (err) => console.log(err)
        );
    }

    //React says we have to define render!!
    render () {
    
        return <div>latitude: {this.state.latitude}</div>
    }
}

ReactDOM.render(
    <App/>,

    document.querySelector('#root')
);