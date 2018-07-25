import React from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends React.Component {
    
    renderField(field) {
        const {meta: { touched, error } } = field;
        const className =  `form-group ${touched && error ? 'has-danger' : ''}`
        
        return (
            <div className={className}>
                <label>{field.label}</label>

                <input 
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log("values")
        console.log(values)
    }
    
    render () {

        const {handleSubmit} = this.props
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title" 
                    component={this.renderField}
                    label="Title"
                />

                <Field 
                    name="categories" 
                    component={this.renderField}
                    label="Categories" 
                />
                <Field 
                    name="content" 
                    component={this.renderField}
                    label="Post Content"
                />

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = "Enter a title!"
    }

    if (!values.categories) {
        errors.categories = "Enter a category!"
    }

    if (!values.content) {
        errors.content = "Enter content!"
    }

    return errors

}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)