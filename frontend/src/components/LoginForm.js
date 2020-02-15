import React, { useState } from 'react'
import  { useField } from '../hooks'

const LoginForm = () => {
  const username = useField('text')
  const password = useField('text')

  const handleLogin = event => {
    event.preventDefault()

  }

  return (
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input { ...username.formInput } />
        </div>
        <div>
          password
          <input { ...password.formInput } />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm