import React from 'react';

export default React.createContext('english');

/*
PROVIDERS

    .Application loads up in the browser
    .We create a context object with a default value of 'english'
    .App component get rendered, creates a provider that wraps UserCreate(every single time you render out an instance of that provider
        you are creating a brand new source of information)
    .Provider updates the values of the context object to 'this.state.language'
    .Button and Field reach into context object, see the value from 'this.state.language'
    .Button and Field render appropriate text to the scree.
 */