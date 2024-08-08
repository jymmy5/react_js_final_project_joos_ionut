import React, { useState, useEffect } from 'react'
import { ErrorAlertStyled } from './AlertStyled'

const ErrorAlert = ({ message, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onRemove) onRemove()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onRemove])

  return (
    <ErrorAlertStyled>
      <div className='errorMsg'>{message}</div>
    </ErrorAlertStyled>
  )
}

export default ErrorAlert
