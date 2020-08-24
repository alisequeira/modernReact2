import React from 'react';
import {Field, reduxForm} from 'redux-form';//Field is a react component and reduxForm is a function
//this component was refactor to a class base component cuz we will have a bunch of helper methods so \
//we can kind of better organize our code.

class StreamCreate extends React.Component {
    renderError = ({error, touched})=> {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    renderInput = (formProps) => {
        //is gona take all the input properties out there and add them as props
        return (
                    <div className="field">
                        <label>{formProps.label}</label>
                        <input {...formProps.input}/>
                        {this.renderError(formProps.meta)}
                    </div>
                )
    }

    onSubmit = (formValues) => {
//doing this is going to be easier for us take those form values now and save them on some api or validate or whatever it's we want to do with
        console.log(formValues)
    }

    render() {
        //prop component is going to be a real component or a function for the field to call
        //this function or component need to return some element is going to be actually shown on the screen
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){
        errors.description = 'You must a description'
    }

    return errors;
}

export default reduxForm({
    form:'streamCreate',
    validate
})(StreamCreate);