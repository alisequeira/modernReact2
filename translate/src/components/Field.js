import React from 'react';
import LanguageContext from '../contexs/LanguageContext';

class Field extends React.Component{
//1. set up context type property(this step is what forms the link between our class and the context object)
    static contextType = LanguageContext;//similar to Field.contextType = LanguageContext(but you must do it after the class)

    render(){
        const text = this.context.language === 'english' ? 'Name' : 'Nombre';
        return(
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

export default Field;