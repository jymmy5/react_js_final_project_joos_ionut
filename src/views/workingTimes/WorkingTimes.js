import React, { useEffect, useState } from 'react'
import { getWTimes } from '../../api/wTimes'
import { WorkingTimesStyled } from './WorkingTimesStyled'

function WorkingTimes() {
  const [wTimes, setWTimes] = useState([])

  useEffect(() => {
    getWTimes((response) => {
      setWTimes(response)
    })
  }, [])

  return (
    <>
      {wTimes.length > 0 ? (
        <WorkingTimesStyled>
          <h2>Orar</h2>
          <ul>
            <div className='container'>
              <div className='row'>
                {wTimes.map((el, index) => {
                  return (
                    <div className='col-4 fac-li' key={index}>
                      <li>
                        {el.dayShort === 'S' || el.day_short === 'D' ? (
                          <span className='weekDays holydays'>
                            {el.day_short}
                          </span>
                        ) : (
                          <span className='weekDays '>{el.day_short}</span>
                        )}
                        {el.hours}
                      </li>
                    </div>
                  )
                })}
              </div>
            </div>
          </ul>
        </WorkingTimesStyled>
      ) : (
        ''
      )}
    </>
  )
}
export default WorkingTimes
