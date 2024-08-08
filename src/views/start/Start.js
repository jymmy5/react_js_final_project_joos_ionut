import React from 'react'
import About from '../about/About'
import ShortFacilitys from '../shortFacilitys/StartShortFacilitys'
import SpecialOffers from '../specialOffers/SpecialOffers'
import StartInfo from '../../components/startInfo/StartInfo'
import Localization from '../localization/Localization'

function Start() {
  return (
    <>
      <ShortFacilitys />
      <About />
      <SpecialOffers />
      <StartInfo />
      <Localization />
    </>
  )
}
export default Start
