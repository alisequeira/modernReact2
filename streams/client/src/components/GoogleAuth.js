import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: ' 220862279465-9gqbenh0jsmg653465mdphrl0lpi8uvn.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    render () {
       return <div>Google Auth</div> 
    }
}

export default GoogleAuth;