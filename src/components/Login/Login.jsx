import React from "react";
import common from "../../Common.module.css";
import css from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  validateEmail,
  required,
} from "./../../utilities/validators/validators";
import { connect } from "react-redux";
import { loginTC } from "./../../redux/authReducer";
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  } else {
    return (
      <div>
        <LoginForm {...props} />
      </div>
    );
  }
};

const LoginForm = (props) => {
  const onSubmit = (data) => {
    props.loginTC(data);
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        //TODO Insert Submit Logic
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
          <Form className={css.form}>
            <h1>Login</h1>
            <Field
              className={common.input}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              validate={validateEmail}
              onChange={handleChange}
              onBlur={handleBlur}
             
            />
            {errors.email && touched.email}
            <ErrorMessage
              className={common.error_message}
              name="email"
              component="div"
            />
            <Field
              type="password"
              name="password"
              className={common.input}
              placeholder="Password"
              validate={required}
            />
            {errors.password && touched.password}
            <ErrorMessage
              className={common.error_message}
              name="password"
              component="div"
            />
            <div>
              <Field type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe"> remember me</label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={common.button}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorised,
  };
};

export default connect(mapStateToProps, { loginTC })(Login);
