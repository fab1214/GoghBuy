import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function SignUp() {
  //create states for form values
  const [formState, setFormState] = useState({ username: '', email: '', password: ''});
  const [addUser, {error}] = useMutation(ADD_USER);
  const { username, email, password} = formState;
  // update state based on form input changes
  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormState({
    ...formState,
    [name]: value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: {...formState} 
      });
      Auth.login(data.addUser.token)
    }catch(e){
      console.error(e);
    }
  };


  return (
  <div className='login_container'>
      <h1>Register</h1>

      <form onSubmit={register}>
          <h5>Username</h5>
          <input type='text' name='username' value={username}  onChange={handleChange}/>

          <h5>E-mail</h5>
          <input type='text' name='email' value={email} onChange={handleChange}/>

          <h5>Password</h5>
          <input type='password' name='password' value={password}  onChange={handleChange}/>

          <button type='submit'>Register</button>
      </form>

      <p>
        By signing up you agree to the goghbuy Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>
      <p>Already have an account?</p>
    <Link to='/login'>
      <button type='submit'>Sign in</button>
      </Link>
      {error && (
        <p>There was an error!</p>
      )}
  </div>
  )
}

export default SignUp;
