import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/shop'
import { CartStyled } from './CartStyled'
import CheckOutForm from '../checkOutForm/CheckOutForm'

function Cart({ cart, onAddCart, isLoggedIn }) {
  const [prodInCart, setProdInCart] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)
  const [currency, setCurrency] = useState('')
  const [showCheckOutForm, setShowCheckOutForm] = useState(false)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    if (storedCart) {
      getProducts((response) => {
        const productIds = storedCart.map((item) => item.id)
        const productsInCart = response
          .filter((product) => productIds.includes(product.id))
          .map((product) => {
            const item = storedCart.find((i) => i.id === product.id)
            return { ...product, quantity: item.quantity }
          })
        setProdInCart(productsInCart)
        calculateTotal(productsInCart)
      })
    }
  }, [cart])

  const calculateTotal = (products) => {
    const total = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    )
    setOrderTotal(total)
    if (products.length > 0) setCurrency(products[0].currency.short)
  }

  const updateQuantity = (productId, newQuantity) => {
    // Ensure newQuantity is at least 1
    const adjustedQuantity = newQuantity < 1 ? 1 : newQuantity

    const updatedCart = prodInCart.map((item) =>
      item.id === productId ? { ...item, quantity: adjustedQuantity } : item
    )

    setProdInCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    calculateTotal(updatedCart)
  }

  const removeProduct = (productId) => {
    const updatedCart = prodInCart.filter((item) => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setProdInCart(updatedCart)
    calculateTotal(updatedCart)
  }

  return (
    <CartStyled>
      <div className='catTitle'>
        <h2>Cos de cumparaturi</h2>
      </div>
      {prodInCart.length > 0 ? (
        <>
          <div className='row productList'>
            {prodInCart.map((product) => (
              <div className='col-12 cartItem' key={product.id}>
                <div className='prodImage'>
                  <img src={product.thumbnail} alt={product.name} />
                </div>
                <div className='prodData'>
                  <div className='prodName'>
                    {product.name} {' - '} {product.weight}
                    {product.units}
                    {' - '}
                    {product.price} {currency}
                  </div>
                  <div className='quantity'>
                    <button
                      className='decrease'
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <input
                      type='number'
                      value={product.quantity}
                      min='1'
                      className='quantityInput'
                      readOnly
                    />
                    <button
                      className='increase'
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className='totalProdPrice'>
                    {' Sub-total: '}
                    <span>
                      {(product.quantity * product.price).toFixed(2)}
                    </span>{' '}
                    {currency}
                  </div>
                </div>
                <div className='prodRemove'>
                  <button
                    className='remove'
                    onClick={() => removeProduct(product.id)}
                  >
                    Sterge
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='total'>
            <span className='orderTotal'>Total comanda: </span>
            <span className='totalOrderPrice'>
              {orderTotal.toFixed(2)}{' '}
              <span className='currency'> {currency}</span>
            </span>
          </div>
          {orderTotal !== 0 && !showCheckOutForm && (
            <div className='deliveryDataB'>
              <button
                className='deliveryDataButton'
                onClick={() => setShowCheckOutForm(true)}
              >
                Date livrare
              </button>
            </div>
          )}
        </>
      ) : (
        <div className='emptyCart'>
          <p>Nu ai nici un produs in cos!</p>
        </div>
      )}
      {showCheckOutForm && (
        <CheckOutForm
          cart={prodInCart}
          isLoggedIn={isLoggedIn}
          orderTotal={orderTotal}
        />
      )}
    </CartStyled>
  )
}

export default Cart
