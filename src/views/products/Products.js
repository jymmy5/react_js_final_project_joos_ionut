import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/shop'
import { useNavigate } from 'react-router'
import { ProductsStyled } from './ProductsStyled'
import AddToCartLocalStorage from '../../components/addToCartLocalStorage/AddToCartLocalStorage'

function Products() {
  const [products, setProducts] = useState([])
  const addToCartStyle = 'multipleProducts'
  const navigate = useNavigate()

  useEffect(() => {
    getProducts((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <ProductsStyled>
      <div className='catTitle'>
        <h2>Produse</h2>
      </div>
      <div className='container'>
        <div className='row productList'>
          {products.map((el, index) => (
            <div className='col-3 tumbnailProduct' key={index}>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault()
                  navigate(`/product/${el.link}`)
                }}
              >
                <div className='tumbnailImg'>
                  <img
                    src={
                      el.thumbnail ||
                      'https://us.123rf.com/450wm/koblizeek/koblizeek2208/koblizeek220800027/189908666-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg'
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
                  {el.price} {el.currency.short}
                </div>
              </a>
              {el.frozen_products === 1 && (
                <div className='frozenProduct'>Contine produse congelate</div>
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
          ))}
        </div>
      </div>
    </ProductsStyled>
  )
}

export default Products
