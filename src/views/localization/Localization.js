import React, { useEffect, useState } from 'react'
import { LocalizationStyled } from './LocalizationStyled'
import { getLocalization } from '../../api/localization'
import GoogleMap from '../googleMaps/GoogleMap'

function Localization() {
  const [localization, setLocalization] = useState([])

  useEffect(() => {
    getLocalization((response) => {
      setLocalization(response)
    })
  }, [])

  return (
    <>
      {localization.length > 0 ? (
        <LocalizationStyled id='localization'>
          {localization.map((el, index) => {
            return (
              <article key={index}>
                <div className='col-12 title'>
                  <h2>{el.title}</h2>
                </div>
                <div className='articleContainer'>
                  <div className='map'>
                    <GoogleMap gps={el.gps} />
                  </div>
                  <div className='description'>{el.description}</div>
                </div>
              </article>
            )
          })}
        </LocalizationStyled>
      ) : (
        ''
      )}
    </>
  )
}

export default Localization
