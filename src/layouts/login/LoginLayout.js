import React from 'react'
import { Outlet } from 'react-router-dom'
import { LoginLayoutStyle } from './LoginLayoutStyled'
import LoginLayoutHeader from '../../../components/headers/login/LoginLayoutHeader'

function LoginLayout() {
  return (
    <>
      <LoginLayoutHeader />
      <LoginLayoutStyle>
        <Outlet />
      </LoginLayoutStyle>
    </>
  )
}

export default LoginLayout
