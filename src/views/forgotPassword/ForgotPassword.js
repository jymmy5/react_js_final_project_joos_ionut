import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ForgotPasswordStyled,
  ForgotPasswordForm,
  ForgotPasswordInput,
  ForgotPasswordButton,
  EmailErrorLabel,
} from './ForgotPasswordStyled'
import { forgotPassword } from '../../api/passwordReset'

function validateComplexEmail(email) {
  const complexEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return complexEmailRegex.test(email)
}

const cleanFormData = {
  email: '',
}

const validation = {
  email: (data) => data.email.length < 5 || !validateComplexEmail(data.email),
}

function ForgotPassword() {
  const [formData, setFormData] = useState(cleanFormData)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = Object.keys(validation).filter((el) =>
      validation[el](formData)
    )

    setErrors(validationErrors)

    if (validationErrors.length === 0) {
      forgotPassword(formData.email, handleSuccess, handleError)
    }
  }

  function handleError(error) {
    console.error(error)
  }

  function handleSuccess(response) {
    console.log(response)
    alert('Link-ul pentru resetarea parolei a fost trimis pe email-ul tau!')
    setFormData(cleanFormData)
    navigate('/login')
  }

  return (
    <ForgotPasswordStyled>
      <h1>Forgot Password</h1>
      <ForgotPasswordForm onSubmit={handleSubmit}>
        <ForgotPasswordInput
          type='text'
          name='email'
          placeholder='E-Mail'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.includes('email') && (
          <EmailErrorLabel>Email prea scurt sau invalid</EmailErrorLabel>
        )}

        <ForgotPasswordButton>Send</ForgotPasswordButton>
      </ForgotPasswordForm>
    </ForgotPasswordStyled>
  )
}

export default ForgotPassword
