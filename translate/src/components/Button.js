import React from 'react';
import LanguageContext from '../contexs/LanguageContext';
import ColorContext from '../contexs/ColorContext';

class Button extends React.Component {
//when we are using a consumer we dont have to specify a context type. context type is only required 
// when we want to get our data assigned to destock context property

    renderSubmit =(language) =>{
        return language ==='english' ? 'Submit' : 'Enviar';
    }
    render(){
            return( 
                <ColorContext.Consumer>
                {(color) => 
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                    {/* Any time we make use of a consumer to get a value out of that pipe pr that context object
                        we are gonna pass in a single function as a child, that will be called with whatever value
                        is inside of our pipe so we can implement some logic inside */}
                        {({language}) => this.renderSubmit(language)}
                        </LanguageContext.Consumer>
                    </button>

                }
            </ColorContext.Consumer>
        )
    }
}
export default Button;