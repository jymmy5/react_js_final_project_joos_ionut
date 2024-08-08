import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router'
import { getProduct } from '../../api/shop'
import { ProductStyled } from './ProductStyled'
import AddToCartLocalStorage from '../../components/addToCartLocalStorage/AddToCartLocalStorage'

function BigImg({ fotoUrl }) {
  return <img src={fotoUrl} alt='photo' className='bigImg' />
}

function Product() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [photo, setPhoto] = useState('')
  const addToCartStyle = 'singleProduct'

  useEffect(() => {
    getProduct(id, (response) => {
      setProduct(response)
      setPhoto(response.gallery[0])
    })
  }, [id])

  return (
    <>
      {product && (
        <>
          <ProductStyled>
            <Link to='/' className='shortNav'>
              HOME
            </Link>{' '}
            /
            <Link to='/meniu' className='shortNav'>
              Meniu
            </Link>{' '}
            /
            <Link
              to={`/categories/${product.category_link}`}
              className='shortNav'
            >
              {product.category_link}
            </Link>
            <div className='container'>
              <div className='row productContainer'>
                <div className='col-12'>
                  <div className='row productDetailsImg'>
                    {product.gallery[0] && (
                      <div className='col-6 foto'>
                        <BigImg fotoUrl={photo} />
                        <div className='tumbnails'>
                          {product.gallery.map((el, index) => (
                            <img
                              key={index}
                              src={el}
                              alt='img'
                              className='tumbnailImg'
                              onClick={() => setPhoto(el)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <div className='col-6 productDetailsData'>
                      <div className='productName'>
                        <h1>{product.name}</h1>
                      </div>
                      <div className='prodWeight'>
                        Portie: {product.weight} {product.units}
                      </div>
                      <div className='price'>
                        {product.price} <span>{product.currency}</span>
                      </div>
                      <AddToCartLocalStorage
                        id={product.id}
                        productName={product.name}
                        addToCartStyle={addToCartStyle}
                      />
                      {product.frozen_products === 1 && (
                        <div className='frozenProduct'>
                          Contine produse congelate
                        </div>
                      )}
                      {product.ingredients && (
                        <div className='ingredients'>
                          <span>Ingrediente: </span> {product.ingredients}
                        </div>
                      )}
                      {product.allergens && (
                        <div className='allergens'>
                          <span>Alergeni: </span> {product.allergens}
                        </div>
                      )}
                      {product.aditivi === 1 && (
                        <div className='frozenProduct'>Contine aditivi</div>
                      )}
                      {product.nutritional_declaration && (
                        <div className='nutritionalDeclaration'>
                          <span>Declaratie nutritionala: </span>
                          {product.nutritional_declaration}
                        </div>
                      )}
                      {product.energetic_value && (
                        <div className='energeticValue'>
                          <span>Valoare energetica: </span>
                          {product.energetic_value} kcal / 100 {product.units}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProductStyled>
        </>
      )}
    </>
  )
}

export default Product
