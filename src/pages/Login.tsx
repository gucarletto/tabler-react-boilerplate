import React from "react";
import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";
import { useHistory } from 'react-router-dom';

import { useAuth } from "../hooks/AuthContext";

import logo from "../assets/img/logo.svg";

type Props = {};

function Login(props: Props) {
  const history = useHistory();

  const { signIn } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors: any = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid E-Mail";
        }
        return errors;
      }}
      onSubmit={async (
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {

        try {
          await signIn({
            email: values.email,
            password: values.password
          });
          history.push('dashboard');
        } catch (err) {
          alert('Invalid E-Mail or Password');
        }

      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <TablerLoginPage
          onSubmit={handleSubmit}
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          logoUrl={logo}
          strings={{
            title:"Login",
            buttonText:"Login",
            emailLabel:"E-Mail",
            emailPlaceholder:"E-Mail",
            passwordLabel:"Senha",
            passwordPlaceholder:"Senha",
          }}
        />
      )}
    />
  );
}

export default Login;