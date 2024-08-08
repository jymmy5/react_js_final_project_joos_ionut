import React, { useEffect, useState } from 'react'
import { DeliveryPricesStyled } from './DeliveryPricesStyled'
import { getDeliveryPrices } from '../../api/delivery'

function DeliveryPrices() {
  const [deliveryPrices, setDeliveryPrices] = useState([])

  useEffect(() => {
    getDeliveryPrices((response) => {
      setDeliveryPrices(response)
    })
  }, [])

  return (
    <>
      {deliveryPrices.length > 0 ? (
        <DeliveryPricesStyled id='deliveryPrices'>
          {deliveryPrices.map((el, index) => {
            return (
              <li key={index}>
                {el.distance1}
                {el.distance2 !== null ? ' - ' + el.distance2 : ''} {el.um}
                {': '} {el.price} {el.currency_short}
              </li>
            )
          })}
        </DeliveryPricesStyled>
      ) : (
        ''
      )}
    </>
  )
}
export default DeliveryPrices
