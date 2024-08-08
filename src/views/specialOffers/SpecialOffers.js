import React, { useEffect, useState } from 'react'
import { SpecialOffersStyled } from './SpecialOffersStyled'
import { getSpecOffers } from '../../api/specOffers'

function SpecialOffers() {
  const [specialOffers, setSpecialOffers] = useState([])

  useEffect(() => {
    getSpecOffers((response) => {
      setSpecialOffers(response)
    })
  }, [])

  return (
    <>
      {specialOffers.length > 0 ? (
        <SpecialOffersStyled id='specialOffers'>
          {specialOffers.map((el, index) => {
            return (
              <article key={index}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 artTitle'>
                      <h2>{el.title}</h2>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 artText'>
                      <img src={el.image} alt='Aroma Pasiunii' />
                      {el.description}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </SpecialOffersStyled>
      ) : (
        ''
      )}
    </>
  )
}
export default SpecialOffers
