import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ForgotPasswordStyled,
  ForgotPasswordForm,
  ForgotPasswordInput,
  ForgotPasswordButton,
  EmailErrorLabel,
  LinkButtons,
} from './ForgotPasswordStyled'

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

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = Object.keys(validation).filter((el) =>
      validation[el](formData)
    )

    setErrors(validationErrors)

    if (validationErrors.length === 0) {
      // addCustomer(formData, handleSuccess, handleError)
    }
  }

  // function handleError(error) {
  //   console.error(error)
  // }

  // function handleSuccess(response) {
  //   console.log(response)
  //   alert('Contul a fost creat cu succes!')
  //   setFormData(cleanFormData)
  // }

  return (
    <>
      <ForgotPasswordStyled>
        <h1>Am uitat parola</h1>
        <ForgotPasswordForm onSubmit={handleSubmit}>
          <ForgotPasswordInput
            type='text'
            name='email'
            placeholder='E-Mai'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.includes('email') && (
            <EmailErrorLabel>Email prea scurt sau invalid</EmailErrorLabel>
          )}

          <ForgotPasswordButton>ForgotPassword</ForgotPasswordButton>
        </ForgotPasswordForm>
        {/* <LinkButtons>
          <Link to='/register'>Creeaza cont</Link>
          <Link to='/forgot-password'>Am uitat parola</Link>
        </LinkButtons> */}
      </ForgotPasswordStyled>
      {/* <h1>ForgotPassword</h1>
      <div>
        <form>
          <label>
            Enter E-Mail
            <input type={'email'} name={'email'} placeholder={'E-Mail'} />
          </label>
          <button>Send</button>
        </form>
      </div> */}
    </>
  )
}

export default ForgotPassword
