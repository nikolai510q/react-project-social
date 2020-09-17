import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { signIn } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';

const Login = (props) => {
  const onSubmit = (formData, dispatch) => {
    console.log(formData);
    props.signIn(formData.email, formData.password, formData.rememberMe);
    dispatch(reset('login'));
  }
  if(props.isAuth) return <Redirect to={'/profile'}/>
  return (
  <div>
    <h1>Login Page</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>)
}

const Input = Element('input');

const LoginForm = (props) => {
  return (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={'email'} placeholder={'email'} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={'password'} placeholder={'password'} type={'password'} validate={[required]}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
      </div>
      {props.error && <div className={s.formSummaryError}> {props.error} </div>}
      <div>
        <button>LOGIN</button>
      </div>  
    </form> 
  </div>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {signIn})(Login);