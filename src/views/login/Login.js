import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LoginInput,
  LoginForm,
  LoginStyled,
  LoginButton,
  LinkButtons,
  ErrorLabel,
} from './LoginStyled'
import { loginCustomer } from '../../api/customers'
import { Link } from 'react-router-dom'
import ErrorAlert from '../../components/alert/ErrorAlert'

const cleanFormData = {
  username: '',
  password: '',
}

const validation = {
  username: (data) => data.username.length < 4,
  password: (data) => data.password.length < 8,
}

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState(cleanFormData)
  const [errors, setErrors] = useState([])
  const [responseErrors, setResponseErrors] = useState([])

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!validation[name]({ ...credentials, [name]: value })) {
      setErrors(errors.filter((el) => el !== name))
    } else {
      if (!errors.includes(name)) setErrors([...errors, name])
    }

    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = Object.keys(validation).filter((el) =>
      validation[el](credentials)
    )

    setErrors(validationErrors)

    if (validationErrors.length === 0) {
      loginCustomer(
        credentials.username,
        credentials.password,
        handleSuccess,
        handleError
      )
    }
  }

  function handleError(error) {
    console.error(error)

    // Parse the error response
    const errorResponse = error.response.data
    const parsedErrors = Object.values(errorResponse).flat()

    // Update the state with the parsed errors
    setResponseErrors(parsedErrors)
  }

  function handleSuccess(response) {
    onLogin(true)
    localStorage.setItem('userData', JSON.stringify(response))
    navigate('/')
  }

  // Function to remove an error message from the state
  const removeError = (index) => {
    setResponseErrors(responseErrors.filter((_, i) => i !== index))
  }

  return (
    <>
      <div>
        {responseErrors.map((message, index) => (
          <ErrorAlert
            key={index}
            message={message}
            onRemove={() => removeError(index)}
          />
        ))}
      </div>

      <LoginStyled>
        <h1>Login</h1>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type='text'
            name='username'
            placeholder='username'
            value={credentials.username}
            onChange={handleChange}
          />
          {errors.includes('username') && (
            <ErrorLabel>Utilizator prea scurt, minim 4 caractere</ErrorLabel>
          )}
          <LoginInput
            type='password'
            name='password'
            placeholder='password'
            value={credentials.password}
            onChange={handleChange}
          />
          {errors.includes('password') && (
            <ErrorLabel>Parola prea scurta, minim 8 caractere</ErrorLabel>
          )}
          <LoginButton>Login</LoginButton>
        </LoginForm>
        <LinkButtons>
          <Link to='/register'>Creeaza cont</Link>
          <Link to='/forgot-password'>Am uitat parola</Link>
        </LinkButtons>
      </LoginStyled>
    </>
  )
}

export default Login
