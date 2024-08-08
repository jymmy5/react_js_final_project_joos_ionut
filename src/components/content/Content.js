import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ContentStyled } from './ContentStyled'
import CategoriesMenu from '../../views/categoriesMenu/CategoriesMenu'

function Content() {
  return (
    <>
      <ContentStyled>
        {/* <CategoriesMenu /> */}
        <Outlet />
      </ContentStyled>
    </>
  )
}
export default Content
