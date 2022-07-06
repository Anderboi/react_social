import React from "react";
import common from "../../Common.module.css";
import css from "./Login.module.css";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  getIsAuthorised,
  getAuthMessage,
  getCaptchaUrl,
} from "../../utilities/selectors/authSelector";

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
      email: "free@samuraijs.com",
      password: "free",
      captcha: null,
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    props.loginTC(data);
    reset();
  };

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
        {/* react hook forms error message */}
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className={common.error_message}>{message}</p>
          )}
        />
        {/* <p className={common.error_message}>{errors.email?.message}</p> */}

        <input
          {...register("password", {
            required: "Password is required",
            maxLength: {
              value: 20,
              message: "Maximum length must be 20 symbols",
            },
            minLength: {
              value: 4,
              message: "Minimal length must be 4 symbols",
            },
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

        <div className={css.form__checkbox}>
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe"> remember me</label>
        </div>
        <div
          className={props.captchaUrl ? css.form__captcha : common.display_none}
        >
          <img src={props.captchaUrl} alt="captcha" />
          <input
            {...register("captcha", {})}
            type="text"
            name="captcha"
            id="captcha"
            className={common.input}
          />
        </div>
        <button
          type="submit"
          className={`${common.button} ${css.submitButton}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          Login
        </button>
      </form>
      {errors.callback && <div>Error</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthorised(state),
    authMessage: getAuthMessage(state),
    captchaUrl: getCaptchaUrl(state),
  };
};

export default connect(mapStateToProps, { loginTC })(Login);
