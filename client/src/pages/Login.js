import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Login() {
  //create states for form values
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  const { email, password } = formState;
  // update state based on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    ///clear form values
    setFormState({
      email: "",
      password: "",
    });
    console.log(formState);
  };

  return (
    <div className="login_container">
      <h1>Sign-in</h1>

      <form onSubmit={signIn}>
        <h5>E-mail</h5>
        <input type="text" name="email" value={email} onChange={handleChange} />

        <h5>Password</h5>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Sign In</button>
      </form>
      <p>
        By signing in you agree to the goghbuy Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        Notice.
      </p>
      {error && <p>There was an error!</p>}
      <p>Don't have an account?</p>
      <Link to="/signup">
        <button type="submit">Sign Up</button>
      </Link>
    </div>
  );
}

export default Login;
