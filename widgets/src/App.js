import React from 'react';
import Accordion from './components/Accordion';

const items =[
    {
        tittle: 'What is React?',
        content: 'React is a front end JavaScript framework'
    },
    {
        tittle: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        tittle: 'How do you use React',
        content: 'You use React by creating components'
    }
];

export default () => {
    return(
        <div>
            <Accordion items={items}/>
        </div>
    );
};