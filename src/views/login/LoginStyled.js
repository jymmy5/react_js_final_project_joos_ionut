import styled from 'styled-components'
import { formColors, COLORS, addUserColors } from '../../styles/setings/colors'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'

// export const FormLogin = styled.div`
//   /* display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: auto;
//   /* min-width: 280px; */
//   /* max-width: 600px;
//   padding: 25px;
//   border: solid #ccc 1px;
//   border-radius: 25px;  */

//   max-width: 600px;
//   margin: 0 auto;
//   margin-top: 10%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${formColors.formContainerBackground};
//   border-radius: 1em;
//   height: 20em;
//   form {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: flex-start;
//     width: 100%;

//     h1 {
//       width: 100%;
//       text-align: center;
//       margin-bottom: 30px;
//     }

//     label {
//       padding: 5px 0;
//     }
//     input {
//       height: 25px;
//       border-radius: 10px;
//       font-weight: bold;
//       width: 100%;
//     }
//     button {
//       display: inline-block;
//       align-self: center;
//       margin-top: 25px;
//       width: 100%;
//       border-radius: 30px;
//       height: 50px;
//     }
//   }
// `;

export const LoginStyled = styled.div`
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

export const LoginForm = styled.form`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const LoginInput = styled.input`
  border-radius: 0.2em;
  outline: none;
  border: none;
  margin: 0.2em 0;
  background-color: ${formColors.inputColor};
  font-size: 2em;
  width: 100%;
  padding: 0.1em 0.2em;
`
export const LoginButton = styled.button`
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

export const ErrorLabel = styled.span`
  border-radius: 0.2em;
  outline: none;
  border: none;
  margin: 0.1em 0;
  color: ${addUserColors.errorTextColor};
  font-size: 1em;
  width: 100%;
  padding: 0.05em 0.2em;
`
