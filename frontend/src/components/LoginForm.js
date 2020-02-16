import React, { useState } from 'react'
import  { useField } from '../hooks';
import '../login.css';

const LoginForm = () => {
  const email = useField('text')
  const password = useField('text')

  const handleLogin = event => {
    event.preventDefault()

  }

  return (
    <div className="loginPage">
      <h1 className="fuud">FÜÜD</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input className="emailInput" { ...email.formInput } placeholder="email" type="email" />
        </div>
        <div>
          <input className="passwordInput" { ...password.formInput } placeholder="password" type="password" />
        </div>
        <p>Forgot password?</p>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <button className="submitButton" type="submit">Login</button>
        <p>Or connect with</p>

        <p>Don't have an account?</p> 
        <p>Sign up?</p>
      </form>
    </div>
  )
}

export default LoginForm