import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
/*
    Link: Is  a react component that we are goint to use in place of any anchor tags(helps to navigate single page application)
 */

const pageOne = () => {
    return(
        <div>
            Page One 
        <Link to="/pageTwo">Navigate to Page Two</Link>
        </div>
    );
};

const pageTwo = () => {
    return(
        <div>
            Page Two
        <button>Click Me</button>

        <Link to="/"> Navigate to Page One</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Route path="/" exact component={pageOne} />
                <Route path="/pagetwo"  component={pageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;