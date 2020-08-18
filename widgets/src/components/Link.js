import React from 'react';

const Link = ({href , className, children}) => {

    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
    };
return( 
        <a 
            onClick={onClick}
            className={className} 
            href={href}
        >
        {children}
        </a>
    );
};

export default Link;