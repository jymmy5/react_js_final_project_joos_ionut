import React, { useEffect, useState } from 'react'
import { OrderdProductsStyled } from './OrderdProductsStyled'
import { getCustomerOderedProducts } from '../../../api/orderedProducts'

function OrderdProducts({ cancel, orderId }) {
  const [customerData, setCustomerData] = useState({})
  const [productList, setProductList] = useState({})
  console.log(orderId)

  useEffect(() => {
    const storedCustomerData = JSON.parse(localStorage.getItem('userData'))
    if (storedCustomerData) {
      setCustomerData(storedCustomerData)
      getCustomerOderedProducts(
        orderId,
        (response) => {
          setProductList(response)
        },
        (error) => {
          console.error('Nu am reusit sa incarc produsele:', error)
        }
      )
    }
  }, [])

  return (
    <>
      <OrderdProductsStyled>
        <div className='cancelButton'>
          <button className='sendOrder' onClick={() => cancel(false)}>
            Inchide
          </button>
        </div>
        <div className='col-12'>
          <h2>Produsele din comanda #{orderId}</h2>
        </div>
        {productList.length > 0 ? (
          <div className='productsContainer' id='orders'>
            {productList.map((el, index) => {
              return (
                <>
                  <div className='orderProductsList' key={el.order_id}>
                    <div className='productImage'>
                      <img
                        src='https://www.aroma-pasiunii.intorsura.ro/media/icons/pizza.png'
                        alt='Aroma Pasiunii'
                      />
                    </div>
                    <div className='productData'>
                      <div className='productName'>
                        <h3>{el.product_details.name}</h3>
                      </div>
                      <div className='productDetails'>
                        <span>Portie:</span> {el.product_details.weight}{' '}
                        {el.product_details.units}
                      </div>
                      <div className='productDetails'>
                        <span>Pret:</span> {el.product_details.price}{' '}
                        {el.currency}
                      </div>
                      <div className='productDetails'>
                        <span>Cantitate comandata:</span>{' '}
                        <span className='quantity'>{el.quantity}</span>
                      </div>
                    </div>
                    <div className='orderPrice'>
                      <span>Subtotal: </span>
                      <h3>
                        {(el.quantity * el.product_details.price).toFixed(2)}
                        <span> {el.currency}</span>
                      </h3>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        ) : (
          <p>Nu ai nici o comanda!</p>
        )}
      </OrderdProductsStyled>
    </>
  )
}

export default OrderdProducts
