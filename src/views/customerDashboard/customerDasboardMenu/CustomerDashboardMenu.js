import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CustomerDashboardMenuStyled } from './CustomerDashboardMenuStyled'
import { getDashboardMenus } from '../../../api/customers_acount_admin'

function CustomerDashboardMenu() {
  const [dashboardMenus, setDashboardMenus] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getDashboardMenus((response) => {
      setDashboardMenus(response)
    })
  }, [])

  return (
    <>
      <CustomerDashboardMenuStyled>
        <div className='catTitle'>
          <h2>Meniu user</h2>
        </div>
        <div className='container'>
          <div className='row categoryList'>
            {dashboardMenus.map((el, index) => {
              return (
                <div className='col-3 tumbnailCategory' key={index}>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(`/categories/${el.id}`)
                    }}
                  >
                    <div className='tumbnailImg'>
                      <img src={el.image} alt={el.name} />
                    </div>
                    <div className='categoryName'>
                      <h2>{el.name}</h2>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </CustomerDashboardMenuStyled>
    </>
  )
}
export default CustomerDashboardMenu
