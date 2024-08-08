import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { submitOrder } from '../../api/checkout'
import { CheckOutFormStyled, AddUserErrorLabel } from './CheckOutFormStyled'

function validateComplexEmail(email) {
  const complexEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return complexEmailRegex.test(email)
}

const cleanFormData = {
  nume: '',
  prenume: '',
  telefon: '',
  email: '',
  localitate: '',
  strada: '',
  nrStrada: '',
  bloc: '',
  scara: '',
  ap: '',
  interfon: '',
}

const validation = {
  nume: (nume) => nume.length < 3,
  prenume: (prenume) => prenume.length < 3,
  telefon: (telefon) => telefon.length < 10,
  email: (email) => email.length < 5 || !validateComplexEmail(email),
  localitate: (localitate) => localitate.length < 1,
  strada: (strada) => strada.length < 3,
  nrStrada: (nrStrada) => nrStrada.length < 0,
  bloc: (bloc) => bloc.length < 0,
  scara: (scara) => scara.length < 0,
  ap: (ap) => ap.length < 0,
  interfon: (interfon) => interfon.length < 0,
}

function CheckOutForm({ cart, isLoggedIn }) {
  const [userData, setUserData] = useState({})
  const [formData, setFormData] = useState(cleanFormData)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'))
    if (storedUserData) {
      setUserData(storedUserData)
      if (isLoggedIn) {
        setFormData({
          nume: storedUserData.first_name || '',
          prenume: storedUserData.last_name || '',
          telefon: storedUserData.phone || '',
          email: storedUserData.email || '',
          localitate: storedUserData.city || '',
          strada: storedUserData.street || '',
          nrStrada: storedUserData.street_number || '',
          bloc: storedUserData.building || '',
          scara: storedUserData.staircase || '',
          ap: storedUserData.apartment || '',
          interfon: storedUserData.intercom || '',
        })
      }
    }
  }, [isLoggedIn])

  const total = {
    total_price: cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    ),
  }

  const handleChange = (e) => {
    if (!validation[e.target.name](e.target.value)) {
      setErrors(errors.filter((el) => el !== e.target.name))
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = Object.keys(validation).filter((el) =>
      validation[el](formData[el])
    )

    setErrors(validationErrors)
    if (validationErrors.length === 0) {
      const orderData = {
        ...formData,
        cart,
        total_price: total.total_price,
        currency: cart[0]?.currency?.short || 'Lei',
      }

      submitOrder(
        orderData,
        (data) => {
          localStorage.removeItem('cart')
          alert('Comanda a fost trimisa')
          navigate('/')
        },
        handleError
      )
    }
  }

  function handleError(error) {
    console.error(error)
  }

  return (
    <>
      {total.total_price !== 0 && (
        <CheckOutFormStyled>
          {!isLoggedIn && (
            <div className='registerLink'>
              <Link to={'/register'}>Creeaza cont</Link>
              <span>sau trimite comanda fara cont de client</span>
            </div>
          )}
          <div className='title'>
            <h2>Date livrare</h2>
          </div>
          <div className='deliveryForm'>
            <form onSubmit={handleSubmit}>
              <div className='customerDetails'>
                <div>
                  <label>Nume</label>
                  <input
                    type='text'
                    name='nume'
                    value={formData.nume}
                    onChange={handleChange}
                    placeholder='Nume'
                  />
                  {errors.includes('nume') && (
                    <AddUserErrorLabel>
                      Nume prea scurt, minim 3 caractere
                    </AddUserErrorLabel>
                  )}
                </div>
                <div>
                  <label>Prenume</label>
                  <input
                    type='text'
                    name='prenume'
                    value={formData.prenume}
                    onChange={handleChange}
                    placeholder='Prenume'
                  />
                  {errors.includes('prenume') && (
                    <AddUserErrorLabel>
                      Prenume prea scurt, minim 3 caractere
                    </AddUserErrorLabel>
                  )}
                </div>
              </div>
              <div className='contactDetails'>
                <div>
                  <label>Telefon</label>
                  <input
                    type='text'
                    name='telefon'
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder='Telefon'
                  />
                  {errors.includes('telefon') && (
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
                    value={formData.email}
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
                  name='localitate'
                  value={formData.localitate}
                  onChange={handleChange}
                  placeholder='Localitate'
                />{' '}
                {errors.includes('localitate') && (
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
                    name='strada'
                    value={formData.strada}
                    onChange={handleChange}
                    placeholder='Strada'
                  />
                  {errors.includes('strada') && (
                    <AddUserErrorLabel>
                      Strada prea scurta, minim 3 caractere
                    </AddUserErrorLabel>
                  )}
                </div>
                <div>
                  <label>Nr Strada</label>
                  <input
                    type='text'
                    name='nrStrada'
                    value={formData.nrStrada}
                    onChange={handleChange}
                    placeholder='Nr Strada'
                  />
                </div>
              </div>
              <div className='addressDetails'>
                <div>
                  <label>Bloc</label>
                  <input
                    type='text'
                    name='bloc'
                    value={formData.bloc}
                    onChange={handleChange}
                    placeholder='Bloc'
                  />
                </div>
                <div>
                  <label>Scara</label>
                  <input
                    type='text'
                    name='scara'
                    value={formData.scara}
                    onChange={handleChange}
                    placeholder='Scara'
                  />
                </div>
                <div>
                  <label>Ap</label>
                  <input
                    type='text'
                    name='ap'
                    value={formData.ap}
                    onChange={handleChange}
                    placeholder='Ap'
                  />
                </div>
              </div>
              <div className='interfon'>
                <label>Nr. interfon</label>
                <input
                  type='text'
                  name='interfon'
                  value={formData.interfon}
                  onChange={handleChange}
                  placeholder='Nr. interfon'
                />
              </div>
              <div className='orderButton'>
                <button className='sendOrder'>Trimite comanda</button>
              </div>
            </form>
          </div>
        </CheckOutFormStyled>
      )}
    </>
  )
}

export default CheckOutForm
