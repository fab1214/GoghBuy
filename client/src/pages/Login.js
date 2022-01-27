import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
  //create states for form values
  const [formState, setFormState] = useState({ email: '', username: '', password: ''});
  // const [loginUser, { error }] = useMutation(LOGIN_USER);
  
  const {email, username, password} = formState;
  const [errorMessage, setErrorMessage] = useState("");

  // update state based on form input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    if (!e.target.value.length) {

      setErrorMessage(`${e.target.name} is required.`);

    } else {

      setErrorMessage("");
    }

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(formState);
  };

  //submit form
  const signIn = async (e) => {
    e.preventDefault();
    // try {
    // //   const {data} = await loginUser({
    // //     variables: {...formState} 
    // //   });
    //   Auth.login(data.login.token)
    // }catch(e){
    //   console.error(e);
    // }
    // ///clear form values
    // setFormState({
    //   email: '',
    //   password: ''
    // });
    console.log(formState);
  };

  const register = async (e) => {
    e.preventDefault();
    // try {
    // //   const {data} = await loginUser({
    // //     variables: {...formState} 
    // //   });
    //   Auth.login(data.login.token)
    // }catch(e){
    //   console.error(e);
    // }
    // ///clear form values
    // setFormState({
    //   email: '',
    //   password: ''
    // });
    console.log(formState);
  };


  return (
  <div className='login_container'>
      <h1>Sign-in</h1>

      <form>
          <h5>E-mail</h5>
          <input type='text' name='email' defaultValue={email} onBlur={handleChange}/>

          <h5>Username</h5>
          <input type='text' name='username' defaultValue={username}  onBlur={handleChange}/>

          <h5>Password</h5>
          <input type='password' name='password' defaultValue={password}  onBlur={handleChange}/>

          <button type='submit' onClick={signIn}>Sign In</button>
      </form>

      <p>
        By signing in you agree to the goghbuy Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>

      <button type='submit' onClick={register}>Create Your GoghBuy account</button>
      {errorMessage && (
        <p>{errorMessage}</p>
      )}
  </div>
  )
}

export default Login;
