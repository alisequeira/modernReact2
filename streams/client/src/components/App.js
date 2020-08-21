import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
/*
    Link: Is  a react component that we are goint to use in place of any anchor tags(helps to navigate single page application)
 */



const App = () => {
    return (
        <div className="ui container">
            <Header/>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                    <Route path="/streams/Show" exact component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;