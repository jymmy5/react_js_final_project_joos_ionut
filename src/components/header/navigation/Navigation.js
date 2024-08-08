import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavigationStyled } from './NavigationStyled'
import { getPageMenus } from '../../../api/header'

function Navigation(props) {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    getPageMenus((response) => {
      setMenus(response)
    })
  }, [])

  return (
    <>
      <NavigationStyled>
        <div className='container'>
          <div className='row headerNav'>
            <div className='col-12 headerButtons'>
              <ul>
                {menus.map((el, index) => {
                  return (
                    <li key={index}>
                      <Link to={el.link}>
                        <span>{el.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </NavigationStyled>
    </>
  )
}

export default Navigation
