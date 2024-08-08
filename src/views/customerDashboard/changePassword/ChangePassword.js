import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChangePasswordStyled, ErrorLabel } from './ChangePasswordStyled'
import { updatePassword } from '../../../api/passwordReset'
import ErrorAlert from '../../../components/alert/ErrorAlert'
import SuccesAlert from '../../../components/alert/SuccesAlert'

const cleanFormData = {
  password: '',
  password_confirmation: '',
}

const validation = {
  password: (data) => data.password.length < 8,
  password_confirmation: (data) => data.password_confirmation !== data.password,
}

function ChangePassword({ cancel }) {
  const [customerData, setCustomerData] = useState(cleanFormData)
  const [formData, setFormData] = useState(cleanFormData)
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const [responseErrors, setResponseErrors] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    const customerData = JSON.parse(localStorage.getItem('userData'))
    if (customerData) {
      setCustomerData(customerData)
    }
  }, [])

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
      updatePassword(customerData.id, formData, handleSuccess, handleError)
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
    console.log(response)
    setAlertMessage('Parola a fost schimbata cu succes!')
    setShowAlert(true)
    setFormData(cleanFormData)
    localStorage.removeItem('userData')
    const timer = setTimeout(() => {
      // window.location.reload();
      window.location.href = '/login'
    }, 2100)

    return () => clearTimeout(timer)
  }

  // Function to remove an error message from the state
  const removeError = (index) => {
    setResponseErrors(responseErrors.filter((_, i) => i !== index))
  }

  return (
    <>
      {showAlert && <SuccesAlert message={alertMessage} />}

      <div>
        {responseErrors.map((message, index) => (
          <ErrorAlert
            key={index}
            message={message}
            onRemove={() => removeError(index)}
          />
        ))}
      </div>
      <ChangePasswordStyled>
        <div className='title'>
          <h2>Schimba parola</h2>
        </div>
        <div className='cancelButton'>
          <button className='sendOrder' onClick={() => cancel(false)}>
            Anuleaza
          </button>
        </div>
        <div className='deliveryForm'>
          <form onSubmit={handleSubmit}>
            <div className='interfon'>
              <label>
                {errors.includes('password') === true ? (
                  <ErrorLabel>
                    Parola este prea scurta, minim 8 caractere
                  </ErrorLabel>
                ) : (
                  'Parola trebuie sa contina minim 8 caractere'
                )}
              </label>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Parola'
              />
            </div>
            <div className='interfon'>
              <label>
                {errors.includes('password_confirmation') && (
                  <ErrorLabel>Parolele nu se potrivesc</ErrorLabel>
                )}
              </label>
              <input
                type='password'
                name='password_confirmation'
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder='Confirma parola'
              />
            </div>
            <div className='changePasswordButton'>
              <button className='sendData'>Schimba parola</button>
            </div>
          </form>
        </div>
      </ChangePasswordStyled>
    </>
  )
}

export default ChangePassword
