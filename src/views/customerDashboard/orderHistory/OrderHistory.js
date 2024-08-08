import React, { useEffect, useState } from 'react'
import { OrderHistoryStyled } from './OrderHistoryStyled'
import { getOrders } from '../../../api/orders'
import OrderdProducts from '../orderdProducts/OrderdProducts'
import formatDate from '../../../functions/formatDate'

function OrderHistory() {
  const [customerData, setCustomerData] = useState({})
  const [orderList, setOrderList] = useState([])
  const [visibleOrderId, setVisibleOrderId] = useState(null)

  useEffect(() => {
    const storedCustomerData = JSON.parse(localStorage.getItem('userData'))
    if (storedCustomerData) {
      setCustomerData(storedCustomerData)
      getOrders(
        storedCustomerData.id,
        (response) => {
          setOrderList(response)
        },
        (error) => {
          console.error('Failed to retrieve orders:', error)
        }
      )
    }
  }, [])

  return (
    <>
      <OrderHistoryStyled>
        <div className='col-12 artTitle'>
          <h2>Istoric comezi</h2>
        </div>
        {orderList.length > 0 ? (
          <div className='orders' id='orders'>
            {orderList.map((el, index) => {
              return (
                <>
                  <div className='customerOrdersList' key={el.order_id}>
                    <div className='orderNumber'>
                      <span>
                        Comanda: <h4>#{el.order_id}</h4>
                      </span>

                      <span className='orderStatus'>
                        Status:
                        {el.active === 1 ? 'Transmisa' : 'Finalizata'}
                      </span>
                      <span className='orderDate'>
                        Data: {formatDate(el.created_at)}
                      </span>
                    </div>
                    <div className='orderPrice'>
                      <div className='orderValue'>
                        <span>Valoare: </span>
                        <h3>{el.total_price}</h3> <span> {el.currency}</span>
                      </div>
                    </div>
                    <div className='buttons'>
                      <button
                        className='viewOrder'
                        onClick={() => {
                          setVisibleOrderId(
                            visibleOrderId === el.order_id ? null : el.order_id
                          )
                        }}
                      >
                        Vezi comanda
                      </button>
                    </div>
                  </div>
                  {visibleOrderId === el.order_id && (
                    <OrderdProducts
                      cancel={() => setVisibleOrderId(null)}
                      orderId={el.order_id}
                    />
                  )}
                </>
              )
            })}
          </div>
        ) : (
          <p>Nu ai nici o comanda!</p>
        )}
      </OrderHistoryStyled>
    </>
  )
}

export default OrderHistory
