import React from "react";
import styles from "./loginForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles["form"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email: </label>
            <div>
              <Field name={"email"} type="email" />
              {errors.email && touched.email ? (
                <div className={styles["error"]}>{errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password: </label>
            <div>
              <Field name={"password"} type="password" />
              {errors.password && touched.password ? (
                <div className={styles["error"]}>{errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className={styles["form-group"] + " " + styles["form-submit"]}>
            <button type="submit">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
