import React, { useRef } from "react";
import common from "../../Common.module.css";
import form from "../common/Inputs/Forms.module.css";
import input from "../common/Inputs/Inputs.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";
import { getAuthMessage } from "../../utilities/selectors/authSelector";
import { connect } from "react-redux";
import { RootState } from "../../redux/reduxStore";

type MapStateToProps = {
  authMessage: string | null;
};

type MapDispatchToProps = {};

type OwnProps = {};

type Props = MapStateToProps & MapDispatchToProps & OwnProps;

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC<Props> = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onBlur" });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={form.form}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={input.inputblock_item}>
          <label>User name: </label>
          <input
            {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters.",
              },
            })}
            className={common.input}
            placeholder="Your full name"
          />

          <div className={common.error_message}>{errors.fullName?.message}</div>
        </section>
        <section className={input.inputblock_item}>
          <label>Email: </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Enter correct email",
              },
            })}
            className={common.input}
            placeholder="Your email"
          />

          <div className={common.error_message}>{errors.email?.message}</div>
        </section>
        <section className={input.inputblock_item}>
          <label>Password:</label>
          <input
            className={common.input}
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters.",
              },
            })}
            type="password"
            placeholder="Password (at least 6 characters)"
          />

          <div className={common.error_message}>{errors.password?.message}</div>
        </section>
        <section className={input.inputblock_item}>
          <label>Confirm password:</label>
          <input
            className={common.input}
            {...register("confirmPassword", {
              deps: ["password"],
              validate: {
                equal: (value) =>
                  value === password.current || "The passwords do not match",
              },
            })}
            type="password"
            placeholder="Confirm password"
          />
          <div className={common.error_message}>
            {errors.confirmPassword?.message}
          </div>
        </section>
        <section className={input.inputblock_item}>
        <input
          type="submit"
          className={cn(common.button, common.submitButton)}
          value="SIGN UP"
          onSubmit={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
        </section>
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    authMessage: getAuthMessage(state),
  };
};

export default connect<
  MapStateToProps,
  MapDispatchToProps,
  OwnProps,
  RootState
>(mapStateToProps)(Register);
