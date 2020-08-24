import React from 'react';
import {Field, reduxForm} from 'redux-form';//Field is a react component and reduxForm is a function
//this component was refactor to a class base component cuz we will have a bunch of helper methods so \
//we can kind of better organize our code.

class StreamCreate extends React.Component {
    renderInput = (formProps) => {
        //is gona take all the input properties out there and add them as props
        return (
                    <div className="field">
                        <label>{formProps.label}</label>
                        <input {...formProps.input}/>
                    </div>
                )
    }
    render() {
        //prop component is going to be a real component or a function for the field to call
        //this function or component need to return some element is going to be actually shown on the screen
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
            </form>
        )
    }
}

export default reduxForm({
    form:'streamCreate'
})(StreamCreate);