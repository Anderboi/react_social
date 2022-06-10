import React from "react";
import common from "../../Common.module.css";
import css from "./Login.module.css";
import { connect } from "react-redux";
import { loginTC } from "./../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  } else {
    return (
      <div>
        <LoginForm {...props} />
      </div>
    );
  }
};

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    props.loginTC(data);
    reset();
  };

  // const errorsCallback = (error) => {
  //   console.log(error);
  //   if (error.resultCode === 10) {
  //     //TODO Add logic for captcha insertion
  //   }
  //   setError("password", { type: "custom", message: error.messages[0] });
  // };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Enter correct email",
            },
          })}
          className={common.input}
          type="email"
          placeholder="Email"
        />
        <p className={common.error_message}>{errors.email?.message}</p>

        <input
          {...register("password", {
            required: "Password is required",
            maxLength: { value: 20, message: "Max length must be 20 symbols" },
            minLength: { value: 6, message: "Max length must be 6 symbols" },
          })}
          type="password"
          className={common.input}
          placeholder="Password"
        />
        {props.authMessage ? ( //TODO Add message clearance after input change
          <p className={common.error_message}>
            {props.authMessage ? props.authMessage : null}
          </p>
        ) : (
          <p className={common.error_message}>{errors.password?.message}</p>
        )} 

        <div>
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe"> remember me</label>
        </div>
        <button type="submit" className={common.button}>
          Login
        </button>
      </form>
      {errors.callback && <div>Error</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorised,
    authMessage: state.auth.authMessage,
  };
};

export default connect(mapStateToProps, { loginTC })(Login);
