import React from 'react'
import { GoogleMapsStyled } from './GoogleMapsStyled'

const GoogleMap = ({ gps }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDVcrHwlY8Uj5wBfQ0aJPHnR15o2NyOpNg&q=${gps}&center=${gps}&zoom=16&maptype=satellite`

  return (
    <>
      <GoogleMapsStyled>
        <iframe src={src} allowFullScreen title='Google Maps'></iframe>
      </GoogleMapsStyled>
    </>
  )
}

export default GoogleMap
