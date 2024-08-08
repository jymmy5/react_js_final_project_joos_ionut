import React, { useEffect, useState } from 'react'
import { DeliveryStyled } from './DeliveryStyled'
import { getDeliveryCond } from '../../api/delivery'
import DeliveryPrices from './DeliveryPrices'

function Delivery() {
  const [deliveryCond, setDeliveryCond] = useState([])

  useEffect(() => {
    getDeliveryCond((response) => {
      setDeliveryCond(response)
    })
  }, [])

  return (
    <>
      {deliveryCond.length > 0 ? (
        <DeliveryStyled id='delivery'>
          {deliveryCond.map((el, index) => {
            return (
              <article key={index}>
                <div className='col-12 title'>
                  <h2>{el.title}</h2>
                </div>
                <div className='col-12 artText'>
                  {el.description > 0 ? el.description : ''}
                  {el.description}
                  <DeliveryPrices />
                </div>
              </article>
            )
          })}
        </DeliveryStyled>
      ) : (
        ''
      )}
    </>
  )
}
export default Delivery
