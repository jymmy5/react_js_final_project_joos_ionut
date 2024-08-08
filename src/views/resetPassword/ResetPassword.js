import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ResetPasswordStyled,
  ResetPasswordForm,
  ResetPasswordInput,
  ResetPasswordButton,
  ErrorLabel,
} from './ResetPasswordStyled'
import { resetPassword } from '../../api/passwordReset'

function validateComplexEmail(email) {
  const complexEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return complexEmailRegex.test(email)
}

const cleanFormData = {
  email: '',
  password: '',
  password_confirmation: '',
}

const validation = {
  email: (data) => data.email.length < 5 || !validateComplexEmail(data.email),
  password: (data) => data.password.length < 8,
  password_confirmation: (data) => data.password_confirmation !== data.password,
}

function ResetPassword() {
  const [formData, setFormData] = useState(cleanFormData)
  const { token } = useParams()
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target

    if (!validation[name]({ ...formData, [name]: value })) {
      setErrors(errors.filter((el) => el !== name))
    } else {
      if (!errors.includes(name)) setErrors([...errors, name])
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = Object.keys(validation).filter((el) =>
      validation[el](formData)
    )

    setErrors(validationErrors)
    if (validationErrors.length === 0) {
      resetPassword(formData, token, handleSuccess, handleError)
    }
  }

  function handleError(error) {
    console.error(error)
  }

  function handleSuccess(response) {
    console.log(response)
    alert('Parola a fost schimbata cu succes!')
    setFormData(cleanFormData)
    navigate('/login')
  }

  return (
    <ResetPasswordStyled>
      <h1>Reset Password</h1>
      <ResetPasswordForm onSubmit={handleSubmit}>
        <div className='interfon'>
          <label>password</label>
          <ResetPasswordInput
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='E-Mail'
          />
          {errors.includes('email') && (
            <ErrorLabel>Invalid email address</ErrorLabel>
          )}

          <label>password</label>
          <ResetPasswordInput
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
          />
          {errors.includes('password') && (
            <ErrorLabel>Parola este prea scurta, minim 8 caractere</ErrorLabel>
          )}

          <label>Confirma parola</label>
          <ResetPasswordInput
            type='password'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder='Confirma parola'
          />
          {errors.includes('password_confirmation') && (
            <ErrorLabel>Parolele nu se potrivesc</ErrorLabel>
          )}
        </div>

        <ResetPasswordButton>Send</ResetPasswordButton>
      </ResetPasswordForm>
    </ResetPasswordStyled>
  )
}

export default ResetPassword
