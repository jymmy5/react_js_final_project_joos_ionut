import React from 'react'
import Header from '../../components/header/Header'
import Aside from '../../components/a-side/Aside'
import Footer from '../../components/footer/Footer'
import { RestMenuLayoutStyled } from './RestMenuLayoutStyled'
import CategoriesMenu from '../../views/categoriesMenu/CategoriesMenu'
import { Outlet } from 'react-router-dom'

function RestMenuLayout({ onBuy, isLoggedIn, toggleLogin }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      <RestMenuLayoutStyled>
        <div className='container'>
          <div className='row mainContent'>
            <div className='col-4 categorys'>
              <Aside />
            </div>
            <CategoriesMenu />
            <div className='col-8 content'>
              <Outlet />
            </div>
          </div>
        </div>
      </RestMenuLayoutStyled>
      <Footer />
    </>
  )
}

export default RestMenuLayout
