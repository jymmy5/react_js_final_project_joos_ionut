import React from 'react'
import { StartInfoStyled } from './StartInfoStyled'
import WorkingTimes from '../../views/workingTimes/WorkingTimes'
import Facilitys from '../../views/facilitys/Facilitys'
import Delivery from '../../views/delivery/Delivery'

function StartInfo() {
  return (
    <>
      <StartInfoStyled id='startInfo'>
        <div className='startInfoContainer'>
          <Facilitys />
          <WorkingTimes />
        </div>
      </StartInfoStyled>
      <Delivery />
    </>
  )
}

export default StartInfo
