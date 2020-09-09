import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

const Login = (props) => {
  const onSubmit = (formData, dispatch) => {
    console.log(formData)
    dispatch(reset("login"));
  }
  return (
  <div>
    <h1>Login Page</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>)
}

const LoginForm = (props) => {
  return (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} placeholder={'login'}/>
      </div>
      <div>
        <Field component={'input'} name={'password'} placeholder={'password'}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
      </div>
      <div>
        <button>LOGIN</button>
      </div>  
    </form> 
  </div>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login
