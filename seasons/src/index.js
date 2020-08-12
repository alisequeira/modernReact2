import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        //THIS IS THE ONLY TIME WE DO DIRECT  ASSIGMENT TO this.state
        this.state = {latitude: null, errorMessage: ''};

    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{//To update state we call setState method!!!!!!!!!!
                this.setState({latitude: position.coords.latitude})
                //WE DID NOT this.state.latitude = position.coords.latitude;
            },
            (err) => this.setState({errorMessage: err.message})
        );
    }
  
   
    //React says we have to define render!!
    render () {//avoid use render method for something else besides returning JSX
        if (this.state.latitude) {
            //user allow geolocation
            return <div> latitude: {this.state.latitude}</div>
        }else if (this.state.errorMessage) {
            //user denied geolocation
            return <div> Error: {this.state.errorMessage}</div>
        }else{
            //waiting user responses 
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App/>,

    document.querySelector('#root')
);