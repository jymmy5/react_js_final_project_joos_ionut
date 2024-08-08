import styled from 'styled-components'
import { formColors, COLORS, addUserColors } from '../../styles/setings/colors'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'

export const ForgotPasswordStyled = styled.div`
  max-width: 600px;
  margin: 0 auto;
  /* margin-top: 10%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${formColors.formContainerBackground};
  border-radius: 1em;
  height: 20em;
  h1 {
    font-size: 1.5em;
    font-weight: bold;
  }

  ${desktop`
    // margin-top: 210px;
    `}
  ${tablet`
    // margin-top: 130px;
    `}
${mobile`
    // margin-top: 220px;
    `}
`

export const ForgotPasswordForm = styled.form`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const ForgotPasswordInput = styled.input`
  border-radius: 0.2em;
  outline: none;
  border: none;
  margin: 0.2em 0;
  background-color: ${formColors.inputColor};
  font-size: 2em;
  width: 100%;
  padding: 0.1em 0.2em;
`
export const ForgotPasswordButton = styled.button`
  border-radius: 0.2em;
  outline: none;
  border: none;
  margin: 0.2em 0;
  background-color: ${formColors.butonColor};
  font-size: 2em;
  font-weight: bold;
  width: 100%;
  padding: 0.1em 0.2em;
  border: solid transparent 1px;
  cursor: pointer;
  &:hover {
    background-color: ${formColors.butonHoverColor};
    border: solid ${formColors.borderColor} 1px;
    color: ${formColors.textHoverColor};
  }
`

export const LinkButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    border-radius: 0.2em;
    outline: none;
    border: none;
    margin: 0.2em 0;
    background-color: ${formColors.butonColor};
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    width: auto;
    padding: 0.3em 0.8em;
    border: solid transparent 1px;
    color: #000;
    &:hover {
      background-color: ${formColors.butonHoverColor};
      border: solid ${formColors.borderColor} 1px;
      color: ${formColors.textHoverColor};
    }
  }
`

export const EmailErrorLabel = styled.span`
  border-radius: 0.2em;
  outline: none;
  border: none;
  margin: 0.1em 0;
  color: ${addUserColors.errorTextColor};
  font-size: 1em;
  width: 100%;
  padding: 0.05em 0.2em;
`
