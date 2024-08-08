import React from 'react'
import Header from '../../components/header/Header'
import { MainLayoutStyled } from '../../layouts/main/MainLayoutStyled'
import Footer from '../../components/footer/Footer'
import { NotFoundStyled } from './NotFoundStyled'

function NotFound() {
  return (
    <>
      <Header />
      <MainLayoutStyled>
        <NotFoundStyled>
          <div className='container'>
            <div className='row mainContent'>
              <div className='col-12'>
                <h2>Nu am gasit pagina pe care o cauti</h2>
              </div>
            </div>
          </div>
        </NotFoundStyled>
      </MainLayoutStyled>
      <Footer />
    </>
  )
}

export default NotFound
