import React from 'react';
import {Link} from 'react-router-dom'; /*
Link: Is  a react component that we are goint to use in place of any anchor tags(helps to navigate single page application)
*/
import GoogleAuth from './GoogleAuth';


const Header = () =>{
    return( 
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">
                        Streamer
                    </Link>
                    <div className="right menu">
                        <Link to="/" className="item">
                            All Streams
                        </Link>
                        <GoogleAuth/>
                    </div>
                </div>
            );
};

export default Header;