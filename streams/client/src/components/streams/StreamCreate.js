import React from 'react';
import {Field, reduxForm} from 'redux-form';//Field is a react component and reduxForm is a function
//this component was refactor to a class base component cuz we will have a bunch of helper methods so \
//we can kind of better organize our code.

class StreamCreate extends React.Component {
    render() {
        return (
            <form>
                <Field name="title"/>
                <Field name="description"/>
            </form>
        )
    }
}

export default reduxForm({
    form:'streamCreate'
})(StreamCreate);