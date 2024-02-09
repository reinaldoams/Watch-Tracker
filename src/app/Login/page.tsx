import React from 'react'

function Login() {
  return (
    <form>
        <label htmlFor="email-input">E-mail</label>
        <input id="email-input" />
        <label htmlFor="password-input">Password</label>
        <input id="password-input" />
    </form>
  )
}

export default Login