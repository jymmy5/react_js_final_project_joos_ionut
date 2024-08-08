import React, { useState } from 'react'
import { submitOrder } from '../../api/checkout'
import { CheckOutFormStyled } from './CheckOutFormStyled'

function CheckOutForm({ cart }) {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    telefon: '',
    localitate: '',
    strada: '',
    nrStrada: '',
    bloc: '',
    scara: '',
    ap: '',
    interfon: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleOrder = (e) => {
    e.preventDefault()
    const orderData = {
      ...formData,
      cart,
      total_price: cart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ),
      currency: cart[0]?.currency?.short || 'USD',
    }

    submitOrder(
      orderData,
      (data) => {
        // Clear localStorage cart
        localStorage.removeItem('cart')
        alert('Order submitted successfully!')
      },
      (error) => {
        console.error('Error submitting order:', error)
      }
    )
  }

  return (
    <CheckOutFormStyled>
      <div className='title'>
        <h2>Date livrare</h2>
      </div>
      <div className='deliveryForm'>
        <form onSubmit={handleOrder}>
          {Object.keys(formData).map((key) => (
            <>
              <label key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type='text'
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            </>
          ))}
          <div className='orderButton'>
            <button className='sendOrder'>Trimite comanda</button>
          </div>
        </form>
      </div>
    </CheckOutFormStyled>
  )
}

export default CheckOutForm
