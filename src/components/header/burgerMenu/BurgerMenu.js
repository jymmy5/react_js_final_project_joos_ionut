import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  faSearch,
  faShoppingCart,
  faUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BurgerMenuStyled } from './BurgerMenuStyled'
import { getPageMenus } from '../../../api/header'

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [menus, setMenus] = useState([])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    getPageMenus((response) => {
      setMenus(response)
    })
  }, [])

  return (
    <>
      <BurgerMenuStyled>
        <div className='burger-menu'>
          <div
            className={`burger-icon ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul className='mobile-menu'>
              <li>
                <section className='search' id='smallSearch'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 searchBar'>
                        <form action='' id='smallSearchForm'>
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
              </li>
              {menus.map((el, index) => {
                return (
                  <li key={index}>
                    <Link to={el.link} onClick={handleLinkClick}>
                      {/* <FontAwesomeIcon icon={el.icon} /> */}
                      <span>{el.name}</span>
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link to='/products' onClick={handleLinkClick}>
                  <span> All products</span>
                </Link>
              </li>
              <li>
                <Link to='/contact/' onClick={handleLinkClick}>
                  <span> Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </BurgerMenuStyled>
    </>
  )
}
export default BurgerMenu
