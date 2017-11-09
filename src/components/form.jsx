import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AnswerForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field name="bearing" component="input" type="number" placeholder="Bearing" />
        <Field name="range" component="input" type="number" placeholder="Range" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

AnswerForm = reduxForm({
  // a unique name for the form
  form: 'answer'
})(AnswerForm)

export default AnswerForm;