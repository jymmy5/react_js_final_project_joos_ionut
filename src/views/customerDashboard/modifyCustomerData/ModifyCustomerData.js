import React, { useState, useEffect } from 'react'
import {
  ModifyCustomerDataStyled,
  AddUserErrorLabel,
} from './ModifyCustomerDataStyled'
import { useNavigate } from 'react-router-dom'
import { updateUserData } from '../../../api/customers'
import SuccesAlert from '../../../components/alert/SuccesAlert'
import ErrorAlert from '../../../components/alert/ErrorAlert'

function validateComplexEmail(email) {
  const complexEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return complexEmailRegex.test(email)
}

const cleanCustomerData = {
  username: '',
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  city: '',
  street: '',
  street_number: '',
  building: '',
  staircase: '',
  apartment: '',
  intercom: '',
}

const validation = {
  username: (data) => data.username.length < 4,
  first_name: (data) => data.first_name.length < 3,
  last_name: (data) => data.last_name.length < 3,
  phone: (data) => data.phone.length < 10,
  email: (data) => data.email.length < 5 || !validateComplexEmail(data.email),
  city: (data) => data.city.length < 3,
  street: (data) => data.street.length < 3,
  street_number: (data) => data.street_number.length < 0,
  building: (data) => data.building.length < 0,
  staircase: (data) => data.staircase.length < 0,
  apartment: (data) => data.apartment.length < 0,
  intercom: (data) => data.intercom.length < 0,
}

function ModifyCustomerData({ cancel }) {
  const [customerData, setCustomerData] = useState(cleanCustomerData)
  const [errors, setErrors] = useState([])
  const [responseErrors, setResponseErrors] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const customerData = JSON.parse(localStorage.getItem('userData'))
    if (customerData) {
      setCustomerData(customerData)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    if (!validation[name]({ ...customerData, [name]: value })) {
      setErrors(errors.filter((el) => el !== name))
    } else {
      if (!errors.includes(name)) setErrors([...errors, name])
    }

    setCustomerData({
      ...customerData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = Object.keys(validation).filter((el) =>
      validation[el](customerData)
    )

    setErrors(validationErrors)

    if (validationErrors.length === 0) {
      updateUserData(customerData.id, customerData, handleSuccess, handleError)
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
    // console.log(response);
    setAlertMessage('Contul a fost modificat cu succes!')
    setShowAlert(true)
    setCustomerData(cleanCustomerData)
    localStorage.removeItem('userData')
    const timer = setTimeout(() => {
      window.location.reload()
      // window.location.href = '/login'
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

      <ModifyCustomerDataStyled>
        <div className='title'>
          <h2>Modifica datele de client</h2>
        </div>
        <div className='cancelButton'>
          <button className='sendOrder' onClick={() => cancel(false)}>
            Anuleaza
          </button>
        </div>
        <div className='deliveryForm'>
          <form onSubmit={handleSubmit}>
            <div className='customerDetails'>
              <div className='interfon'>
                <label>Utilizator</label>
                <input
                  type='text'
                  name='username'
                  value={customerData.username}
                  onChange={handleChange}
                  placeholder='Utilizator'
                />
                {errors.includes('username') && (
                  <AddUserErrorLabel>
                    Utilizator prea scurt, minim 4 caractere
                  </AddUserErrorLabel>
                )}
              </div>
              <div>
                <label>Nume</label>
                <input
                  type='text'
                  name='first_name'
                  value={customerData.first_name}
                  onChange={handleChange}
                  placeholder='Nume'
                />
                {errors.includes('first_name') && (
                  <AddUserErrorLabel>
                    Numele e prea scurt, minim 3 caractere
                  </AddUserErrorLabel>
                )}
              </div>
              <div>
                <label>Prenume</label>
                <input
                  type='text'
                  name='last_name'
                  value={customerData.last_name}
                  onChange={handleChange}
                  placeholder='Prenume'
                />
                {errors.includes('last_name') && (
                  <AddUserErrorLabel>
                    Prenumele e prea scurt, minim 3 caractere
                  </AddUserErrorLabel>
                )}
              </div>
            </div>
            <div className='contactDetails'>
              <div>
                <label>Telefon</label>
                <input
                  type='text'
                  name='phone'
                  value={customerData.phone}
                  onChange={handleChange}
                  placeholder='Telefon'
                />
                {errors.includes('phone') && (
                  <AddUserErrorLabel>
                    Numar de telefon prea scurt
                  </AddUserErrorLabel>
                )}
              </div>
              <div>
                <label>Email</label>
                <input
                  type='text'
                  name='email'
                  value={customerData.email}
                  onChange={handleChange}
                  placeholder='Email'
                />
                {errors.includes('email') && (
                  <AddUserErrorLabel>
                    Email prea scurt sau invalid
                  </AddUserErrorLabel>
                )}
              </div>
            </div>
            <div className='city'>
              <label>Localitate</label>
              <input
                type='text'
                name='city'
                value={customerData.city}
                onChange={handleChange}
                placeholder='Localitate'
              />
              {errors.includes('city') && (
                <AddUserErrorLabel>
                  Localitatea e prea scurta, minim 1 caracter
                </AddUserErrorLabel>
              )}
            </div>
            <div className='address'>
              <div>
                <label>Strada</label>
                <input
                  type='text'
                  name='street'
                  value={customerData.street}
                  onChange={handleChange}
                  placeholder='Strada'
                />
                {errors.includes('street') && (
                  <AddUserErrorLabel>
                    Strada prea scurta, minim 3 caractere
                  </AddUserErrorLabel>
                )}
              </div>
              <div>
                <label>Nr strada</label>
                <input
                  type='text'
                  name='street_number'
                  value={customerData.street_number}
                  onChange={handleChange}
                  placeholder='Nr strada'
                />
              </div>
            </div>
            <div className='addressDetails'>
              <div>
                <label>Bloc</label>
                <input
                  type='text'
                  name='building'
                  value={customerData.building}
                  onChange={handleChange}
                  placeholder='Bloc'
                />
              </div>
              <div>
                <label>Scara</label>
                <input
                  type='text'
                  name='staircase'
                  value={customerData.staircase}
                  onChange={handleChange}
                  placeholder='Scara'
                />
              </div>
              <div>
                <label>Apartament</label>
                <input
                  type='text'
                  name='apartment'
                  value={customerData.apartment}
                  onChange={handleChange}
                  placeholder='Apartament'
                />
              </div>
            </div>
            <div className='interfon'>
              <label>Nr. interfon</label>
              <input
                type='text'
                name='intercom'
                value={customerData.intercom}
                onChange={handleChange}
                placeholder='Nr. interfon'
              />
            </div>
            <div className='orderButton'>
              <button className='sendOrder'>Modifica datele</button>
            </div>
          </form>
        </div>
      </ModifyCustomerDataStyled>
    </>
  )
}

export default ModifyCustomerData
