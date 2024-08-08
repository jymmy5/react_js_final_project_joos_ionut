import React from 'react'
import { Link } from 'react-router-dom'
import { FooterStyled } from './FooterStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <FooterStyled>
        <div className='container'>
          <div className='row footer'>
            <div className='col-6 companyData'>
              <div className='logo'>
                <div className='logoImg'>
                  {/* <img src={logo} alt='' className='logoImg' /> */}
                </div>
                <div className='identityTitles'>
                  <h2>
                    Aroma <span>Pasiunii</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-6 socialMedia'>
              <ul>
                <li>
                  {/* <a href='/facebook'> */}
                  <a
                    href='https://www.facebook.com/p/Aroma-Pasiunii-100084040176244/'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  {/* <a href='/instagram/'> */}
                  <a href='https://www.instagram.com/' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FooterStyled>
    </>
  )
}
export default Footer
