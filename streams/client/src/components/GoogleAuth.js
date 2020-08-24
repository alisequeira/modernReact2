import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {


    componentDidMount = () => {
        window.gapi.load('client:auth2', ()=>{//arrow function return a promise
            window.gapi.client.init({
                clientId: '220862279465-9gqbenh0jsmg653465mdphrl0lpi8uvn.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton =  () => {
        if(this.props.isSignedIn === null){
            return null
        } else if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sing Out
                </button>
            )
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sing In
                </button>
            )
        }
    }
    render () {
        return <div>{this.renderAuthButton()}</div> 
    }
}

const mapStateToProp = (state) => {
 return{isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProp, {signIn,signOut})(GoogleAuth);