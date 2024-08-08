import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyled } from './HeaderStyled'
import Navigation from './navigation/Navigation'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BurgerMenu from './burgerMenu/BurgerMenu'
import { getUnitData } from '../../api/header'

function Header({ isLoggedIn, toggleLogin }) {
  const [unitData, setUnitData] = useState([])

  useEffect(() => {
    getUnitData((response) => {
      setUnitData(response)
    })
  }, [])

  return (
    <>
      <HeaderStyled>
        {unitData.length > 0 ? (
          <div className='container'>
            <div className='row header'>
              <div className='col-6 identity'>
                <div className='logo'>
                  <div className='logoImg'>
                    <img
                      src={unitData[0].logo}
                      alt={unitData[0].unit_type + ' ' + unitData[0].unit_name1}
                      className='logoImg'
                    />
                  </div>
                  <div className='identityTitles'>
                    <h2>
                      {unitData[0].unit_type}{' '}
                      <span>{unitData[0].unit_name1}</span>
                    </h2>
                    <span className='logoText'>{unitData[0].slogan}</span>
                  </div>
                  <BurgerMenu />
                </div>
              </div>
              <div className='col-6 acountButons'>
                {!isLoggedIn ? (
                  <Link to='/login'>Login</Link>
                ) : (
                  <Link to='/' onClick={toggleLogin}>
                    Iesi
                  </Link>
                )}
              </div>
              <div className='col-6 userActions'>
                <div className='row'>
                  <div className='col-12 userMenu'>
                    <ul>
                      <li>
                        {!isLoggedIn ? (
                          <Link to='/login'>Login</Link>
                        ) : (
                          <Link to='/' onClick={toggleLogin}>
                            Iesi
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link to='/cart/'>Cos</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 search'>
                    <section className='search' id='search'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-12 searchBar'>
                            <form action='' id='searchForm'>
                              <div className='searchInput'>
                                <input
                                  type='text'
                                  name='search'
                                  placeholder='Cauta'
                                />
                                <button className='searchBtn'>
                                  <FontAwesomeIcon icon={faSearch} />
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <Navigation />
      </HeaderStyled>
    </>
  )
}
export default Header
