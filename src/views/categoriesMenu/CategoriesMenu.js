import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CategoriesMenuStyled } from './CategoriesMenuStyled'
import { getCategories } from '../../api/shop'

function CategoriesMenu() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCategories((response) => {
      setCategories(response)
    })
  }, [])

  return (
    <>
      <CategoriesMenuStyled>
        <div className='catTitle'>
          <h2>Categories</h2>
        </div>
        <div className='container'>
          <div className='row categoryList'>
            {categories.map((el, index) => {
              return (
                <div className='col-3 tumbnailCategory' key={index}>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(`/categories/${el.category_link}`)
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
      </CategoriesMenuStyled>
    </>
  )
}
export default CategoriesMenu
