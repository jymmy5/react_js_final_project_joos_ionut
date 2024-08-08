import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AsideStyled } from './AsideStyled'
import { getCategories } from '../../api/shop'

function Aside() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCategories((response) => {
      setCategories(response)
    })
  }, [])

  return (
    <>
      <AsideStyled>
        <h2>Categories</h2>
        <ul>
          {categories.map((el, index) => {
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
      </AsideStyled>
    </>
  )
}
export default Aside
