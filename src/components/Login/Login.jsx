import React from "react";
import common from "../../Common.module.css";
import css from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authAPI } from "../../api/api";

export const Login = (props) => {
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const onSubmit = (data) => {
  authAPI.authLogin(data).then((response) => {
    console.log(response);
  });
};

const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.userName) {
        //     errors.userName = "Required";
        //   }
        //   return errors;
        // }}
        //TODO Insert Submit Logic
        onSubmit={async (values, { setSubmitting }) => {
          await setTimeout(() => {
            console.log(values);
            authAPI.authLogin(values).then((response) => {
              console.log(response);
            });
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <h1>Login</h1>
            <Field
              className={common.input}
              type="text"
              name="email"
              // id="userName"
              placeholder="Email"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.userName}
            />
            <ErrorMessage name="userName" component="div" />
            <Field
              type="password"
              name="password"
              className={common.input}
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
            <div>
              <Field type="checkbox" name="rememberMe" /> remember me
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
// const LoginForm = () => {
//   return (
//     <div>
//       <Formik initialValues={{ userName: "", password: "" }}>
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form action="" className={css.form} onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <input
//               className={common.input}
//               type="text"
//               name="userName"
//               id="userName"
//               placeholder="Login"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.userName}
//             />
//             <input
//               className={common.input}
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//             />
//             <div>
//               <input type="checkbox" name="remember" id="remember" /> remember
//               me
//             </div>
//             <input className={common.button} type="button" value="Login" disabled={isSubmitting}/>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };
