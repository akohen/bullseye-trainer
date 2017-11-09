import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AnswerForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <h3>Target position from yours</h3>
      <Field name="bearing" component="input" type="number" placeholder="Bearing" autoFocus />
      <Field name="range" component="input" type="number" placeholder="Range" />
      <button type="submit">Submit</button>
    </form>
  )
}

AnswerForm = reduxForm({
  // a unique name for the form
  form: 'answer'
})(AnswerForm)

export default AnswerForm;