import React from 'react'

const Login = () => {
  return (
    <div className="container">
      <div className="formWrapper">
        <h3>CHAT APP</h3>
        <h5>Login</h5>
        <form>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
        <p>dont't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login