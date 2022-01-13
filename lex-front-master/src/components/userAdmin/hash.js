import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Redirect } from "react-router";
 
const AdminLogin = (props) => {


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

    console.log(formValues);
  };
 
  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
 
        if (!formValues.full_name) {
          errors.full_name = "You must enter a username";
        }

        if(!formValues.password){
          errors.password = "You must enter a password";
        }
 
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="username" component={renderInput} label="Enter UserName" />
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

export default AdminLogin;