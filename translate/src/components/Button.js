import React from 'react';
import LanguageContext from '../contexs/LanguageContext';

class Button extends React.Component {
//when we are using a consumer we dont have to specify a context type. context type is only required 
// when we want to get our data assigned to destock context property
    render(){
        return <button className="ui button primary">
            <LanguageContext.Consumer>
                {/* Any time we make use of a consumer to get a value out of that pipe pr that context object
                    we are gonna pass in a single function as a child, that will be called with whatever value
                    is inside of our pipe so we can implement some logic inside */}
                {(value) => value === 'english' ? 'Submit' : 'Enviar'}
            </LanguageContext.Consumer>
        </button>;
    }
}
export default Button;