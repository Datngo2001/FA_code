import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(messageErrors) => <div>{messageErrors}</div>}
    </ErrorMessage>
  );
};

function SigninForm() {
  const init = {
    email: "",
    password: "",
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Incorrect format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={init}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      <Form noValidate>
        <div>
          <Field name="email" type="email"></Field>
          <FormError name="email"></FormError>
        </div>
        <div>
          <Field name="password" type="password"></Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default SigninForm;
