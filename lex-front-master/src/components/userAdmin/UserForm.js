import React from "react";
import { Form, Field } from "react-final-form";
 
const UserForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
 
  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };
 
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
 
  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
 
        if (!formValues.full_name) {
          errors.full_name = "You must enter a name";
        }
 
        if (!formValues.email) {
          errors.email = "You must enter an email";
        }

        if(!formValues.password){
          errors.password = "You must enter a password";
        }
 
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="full_name" component={renderInput} label="Enter Full Name" />
          <Field
            name="email"
            component={renderInput}
            label="Enter email"
          />
          <Field 
            name="password"
            component={renderInput}
            label="Enter password"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};
 
export default UserForm;