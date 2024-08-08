import React, { useEffect, useState } from 'react'
import { AboutStyled } from './AboutStyled'
import { getAbout } from '../../api/about'

function About() {
  const [about, setAbout] = useState([])

  useEffect(() => {
    getAbout((response) => {
      setAbout(response)
    })
  }, [])

  return (
    <>
      {about.length > 0 ? (
        <AboutStyled id='about'>
          {about.map((el, index) => {
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
        </AboutStyled>
      ) : (
        ''
      )}
    </>
  )
}
export default About
