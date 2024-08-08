import React, { useState, useEffect } from 'react'
import { StartShortFacilitys } from './StartShortFacilitysStyled'
import { getShortFacilitys } from '../../api/facilitys'

function ShortFacilitys() {
  const [shortFac, setShortFac] = useState([])

  useEffect(() => {
    getShortFacilitys((response) => {
      setShortFac(response)
    })
  }, [])

  return (
    <>
      <StartShortFacilitys id='shortFacilitys'>
        <ul>
          <div className='container'>
            <div className='row'>
              {shortFac.map((el, index) => {
                return (
                  <div className='col-4 fac-li' key={index}>
                    <li>{el.name}</li>
                  </div>
                )
              })}
            </div>
          </div>
        </ul>
      </StartShortFacilitys>
    </>
  )
}

export default ShortFacilitys
