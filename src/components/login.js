import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

//login
async function loginUser(credentials) {
    return fetch('http://localhost:4001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json()) //the token is returned to handleSubmit
      .catch(() => console.log('Error in login component!!')) //Work in progress to get here...
}

//Create a user
async function createUser(credentials) {
  return fetch('http://localhost:4001/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(() => console.log('Error in create account component!!'))
}

export function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLoginSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
        username,
        password
    });
    setToken(token);
    handleInputsReset();
  }

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    const token = await createUser({
        username,
        password
    });
    setToken(token);
    handleInputsReset();
  }

    // Reset all input fields
  const handleInputsReset = () => {
    setUsername('')
    setPassword('')
  }

  return(
    <div className="login-wrapper">
      <h3>Please Log In or Sign Up</h3>
      <h3>This website is more secure than blockchain</h3>
      <h3>I bet you can't brute force your way in</h3>
        
      <div className='div-form'>
        <form>
            <fieldset>
              <label className="form-label" >Enter Username </label>
              <input className="form-input" type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" >Enter password </label>
              <input className="form-input" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </fieldset>
            <div>
              <div>
                <Button onClick={handleLoginSubmit} variant="outline-success" type="text">Login</Button>
                </div>
                <br></br>
                <div>
                <Button onClick={handleSignUpSubmit} variant="outline-info" type="text">Sign Up</Button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }