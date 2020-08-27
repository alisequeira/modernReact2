import React from 'react';
import LanguageContext from '../contexs/LanguageContext';

class Button extends React.Component {
//1. set up context type property(this step is what forms the link between our class and the context object)
    static contextType = LanguageContext;//similar to Button.contextType = LanguageContext(but you must do it after the class)
    render(){
        const text = this.context === 'english' ? 'submit' : 'Enviar'; 
        return <button className="ui button primary">{text}</button>;
    }
}
export default Button;