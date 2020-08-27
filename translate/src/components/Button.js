import React from 'react';
import LanguageContext from '../contexs/LanguageContext';

class Button extends React.Component {
//1. set up context type property
    static contextType = LanguageContext;//similar to Button.contextType = LanguageContext(but you must do it after the class)
    render(){
        console.log(this.context);
        return <button className="ui button primary">Submit</button>;
    }
}
export default Button;