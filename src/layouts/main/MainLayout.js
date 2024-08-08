import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'
import { MainLayoutStyled } from './MainLayoutStyled'

function MainLayout({ isLoggedIn, toggleLogin }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      <MainLayoutStyled>
        <div className='container'>
          <div className='row mainContent'>
            <div className='col-8 content'>
              <Content />
            </div>
          </div>
        </div>
      </MainLayoutStyled>
      <Footer />
    </>
  )
}

export default MainLayout
