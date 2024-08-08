import React from 'react'
import { CustomerLayoutStyled } from './CustomerLayoutStyled'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function CustomerLayout({ isLoggedIn, toggleLogin }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      <CustomerLayoutStyled>
        <div className='container'>
          <div className='row mainContent'>
            <div className='col-8 content'>
              <Outlet />
            </div>
          </div>
        </div>
      </CustomerLayoutStyled>
      <Footer />
    </>
  )
}

export default CustomerLayout
