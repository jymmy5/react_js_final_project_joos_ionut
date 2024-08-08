import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCategoriesProduct, getCategoryProducts } from '../../api/shop'
import { useNavigate } from 'react-router'
import { CategoriesStyled } from './CategoriesStyled'
import AddToCartLocalStorage from '../../components/addToCartLocalStorage/AddToCartLocalStorage'

function Categories() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [catProducts, setCatProducts] = useState([])
  const [categories, setCategories] = useState(null)
  const addToCartStyle = 'multipleProducts'

  useEffect(() => {
    getCategoryProducts(id, (response) => {
      setCatProducts(response)
      getCategoriesProduct(id, (response) => {
        setCategories(response)
      })
    })
  }, [id])

  return (
    <>
      {categories !== null && (
        <CategoriesStyled>
          <div className='catTitle'>
            <h2>{categories[0].name}</h2>
          </div>
          <div className='container'>
            <div className='row productList'>
              {catProducts.length > 0 ? (
                catProducts.map((el, index) => {
                  return (
                    <div className='col-3 tumbnailProduct' key={index}>
                      <a
                        href='#'
                        onClick={(e) => {
                          e.preventDefault()
                          navigate(`/product/${el.product_link}`)
                        }}
                      >
                        <div className='tumbnailImg'>
                          <img
                            src={
                              el.image
                                ? el.image
                                : 'https://us.123rf.com/450wm/koblizeek/koblizeek2208/koblizeek220800027/189908666-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg'
                            }
                            alt={el.name}
                          />
                        </div>
                        <div className='productName'>
                          <h2>{el.name}</h2>
                        </div>
                        <div className='prodWeight'>
                          Portie: {el.weight} {el.units}
                        </div>
                        <div className='price'>
                          {el.price} {el.currency_short}
                        </div>
                      </a>
                      {el.frozen_products === 1 ? (
                        <div className='frozenProduct'>
                          Contine produse congelate
                        </div>
                      ) : (
                        <div className='frozenProduct'></div>
                      )}
                      <div className='addToCart'>
                        <AddToCartLocalStorage
                          index={index}
                          id={el.id}
                          productName={el.name}
                          addToCartStyle={addToCartStyle}
                        />
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className='col-12'>
                  <div className='noProducts'>
                    <h2>Nu exista produse in aceasta categorie</h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CategoriesStyled>
      )}
    </>
  )
}

export default Categories
