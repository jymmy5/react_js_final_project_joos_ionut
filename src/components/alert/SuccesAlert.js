import React, { useState, useEffect } from 'react'
import { SuccesAlertStyled } from './AlertStyled'

const SuccesAlert = ({ message }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <>
      <SuccesAlertStyled>
        <div className='successMsg'>{message}</div>
      </SuccesAlertStyled>
    </>
  )
}

export default SuccesAlert
