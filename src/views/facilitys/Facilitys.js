import React, { useEffect, useState } from 'react'
import { Facilitystyled } from './FacilitysStyled'
import { getFacilitys } from '../../api/facilitys'

function Facilitys() {
  const [facilitys, setFacilitys] = useState([])

  useEffect(() => {
    getFacilitys((response) => {
      setFacilitys(response)
    })
  }, [])

  return (
    <>
      {facilitys.length > 0 ? (
        <Facilitystyled>
          <h2>Facilitati</h2>
          <ul>
            <div className='container'>
              <div className='row'>
                {facilitys.map((el, index) => {
                  return (
                    <div className='col-6 fac-li' key={index}>
                      <li>{el.name}</li>
                    </div>
                  )
                })}
              </div>
            </div>
          </ul>
        </Facilitystyled>
      ) : (
        ''
      )}
    </>
  )
}
export default Facilitys
