import React, { useState, useEffect } from 'react'

import {
  AddToCartMultipleStyled,
  AddToCartSingleStyled,
} from './AddToCartLocalStorageStyled'
import SuccesAlert from '../alert/SuccesAlert'

function AddToCartLocalStorage({ id, productName, addToCartStyle }) {
  const TemplateStyle =
    addToCartStyle === 'multipleProducts'
      ? AddToCartMultipleStyled
      : AddToCartSingleStyled

  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const handleQuantity = (e) => {
    const newValue = parseInt(e.target.value, 10)
    setQuantity(isNaN(newValue) || newValue < 1 ? 1 : newValue)
  }

  const decreaseValue = (e) => {
    e.preventDefault()
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  const increaseValue = (e) => {
    e.preventDefault()
    setQuantity((prevValue) => prevValue + 1)
  }

  const handleShowAlert = (message) => {
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 1000)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevCart, { id: id, quantity: quantity }]
    })

    handleShowAlert(
      `Produsul "${productName}" a fost adaugat in cos. Cantitate: ${quantity}`
    )
    setQuantity(1)
  }

  return (
    <>
      {showAlert && <SuccesAlert message={alertMessage} />}

      <TemplateStyle>
        <form id={id} onSubmit={handleSubmit}>
          <div className='inputData'>
            <button type='button' className='decrease' onClick={decreaseValue}>
              -
            </button>
            <input
              type='number'
              name='quantity'
              id='quantity'
              className='quantityInput'
              value={quantity}
              onChange={handleQuantity}
              min='1'
            />
            <button type='button' className='increase' onClick={increaseValue}>
              +
            </button>
          </div>
          <button type='submit' className='addToCart'>
            Comanda
          </button>
        </form>
      </TemplateStyle>
    </>
  )
}

export default AddToCartLocalStorage
