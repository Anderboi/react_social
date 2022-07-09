import React from "react";
import common from "../../Common.module.css";
import form from "../common/Inputs/Forms.module.css";
import input from "../common/Inputs/Inputs.module.css";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getIsAuthorised,
  getAuthMessage,
  getCaptchaUrl,
} from "../../utilities/selectors/authSelector";
import { RootState } from "../../redux/reduxStore";

type MapStateToProps = {
  isAuth: boolean;
  authMessage: string | null;
  captchaUrl: string | null;
};

type MapDispatchToProps = {
  loginTC: (data: ILoginFormValues) => void;
};

type OwnProps = {};

type Props = MapStateToProps & MapDispatchToProps & OwnProps;

const Login: React.FC<Props> = (props): JSX.Element => {
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

interface ILoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
}

const LoginForm: React.FC<Props> = (props): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    defaultValues: {
      email: "free@samuraijs.com",
      password: "free",
      captcha: null,
      rememberMe: false,
    },
    mode: "onChange",
  });

  const onSubmit = (data: ILoginFormValues): void => {
    props.loginTC(data);
    reset();
  };

  return (
    <div className={form.form}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={input.inputblock_item}>
          <label>Email:</label>
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
            placeholder="Email@mail.com"
          />

          <div className={common.error_message}>
            {errors.email?.message && <p>{errors.email?.message}</p>}
          </div>
        </section>

        <section className={input.inputblock_item}>
          <label>Password:</label>
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
          {
            props.authMessage && ( //TODO Add message clearance after input change
              <p className={common.error_message}>
                {props.authMessage || null}
              </p>
            )
            // (<p className={common.error_message}>{errors.password?.message}</p>)
          }
        </section>

        <section className={input.form__checkbox}>
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe"> remember me</label>
        </section>
        <div
          className={
            props.captchaUrl ? input.form__captcha : common.display_none
          }
        >
          <img src={props.captchaUrl!} alt="captcha" />
          <input
            {...register("captcha", {})}
            type="text"
            name="captcha"
            id="captcha"
            className={common.input}
          />
        </div>
        <section className={input.inputblock_item}>
          <button
            type="submit"
            className={`${common.button} ${common.submitButton}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            SIGN IN
          </button>
        </section>
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuth: getIsAuthorised(state),
    authMessage: getAuthMessage(state),
    captchaUrl: getCaptchaUrl(state),
  };
};

export default connect<
  MapStateToProps,
  MapDispatchToProps,
  OwnProps,
  RootState
>(mapStateToProps, { loginTC })(Login);
