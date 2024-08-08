import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AsideCustomerLayoutStyled } from './AsideCustomerLayoutStyled'
import { getDashboardMenus } from '../../api/customers_acount_admin'

function AsideCustomerLayout() {
  const [dashboardMenus, setDashboardMenus] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getDashboardMenus((response) => {
      setDashboardMenus(response)
    })
  }, [])

  return (
    <>
      <AsideCustomerLayoutStyled>
        <h2>meniu user</h2>
        <ul>
          {dashboardMenus.map((el, index) => {
            return (
              <li key={index}>
                <a
                  href='#'
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/categories/${el.category_link}`)
                  }}
                >
                  {el.name}
                </a>
              </li>
            )
          })}
        </ul>
      </AsideCustomerLayoutStyled>
    </>
  )
}
export default AsideCustomerLayout
