import styled from 'styled-components'
import {
  formColors,
  COLORS,
  addUserColors,
} from '../../../styles/setings/colors'
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens'

export const ChangePasswordStyled = styled.section`
  // margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 30px auto; */
  /* padding-bottom: 20px; */
  // padding: 20px 0 40px 0;
  padding-top: 20px;
  background-color: ${COLORS.colorAboutSectionBg};
  background-color: #da4444bb;
  ${desktop`
    margin-top: 20px;
  `}
  ${tablet`
    margin-top: 20px;
  `}
${mobile`
    margin-top: 10px;
  `}
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px);
  background-color: grey; */

  .title {
    margin-bottom: 15px;
    h2 {
      display: inline-flex;
      text-decoration: underline;
      text-decoration-thickness: 4px;
      text-decoration-color: ${COLORS.colorTextUnderlineDefault};
      /* background-color: grey; */

      ${desktop`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
      `}
      ${tablet`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
      `}
    ${mobile`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
    `}
    }
  }
  .cancelButton {
    margin-bottom: 25px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 0 5px 0;
    /* border-bottom: solid #fff 3px; */
    /* background-color: red; */
    .sendOrder {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      margin-top: 25px;
      padding: 10px 25px 10px 25px;
      border-radius: 50px;
      border: solid #ccc 2px;
      background-color: #6c6c6c;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #474747;
        border: solid #474747 2px;
      }
      ${mobile`
          margin: 10px 0;
          width: 80%;
          `}
    }
  }

  /* .registerLink {
    margin-bottom: 25px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px 0 40px 0;
    border-bottom: solid #fff 3px;
   
    a {
      border-radius: 4em;
      outline: none;
      border: none;
     
      background-color: ${formColors.butonColor};
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      width: 100%;
      padding: 0.8em 0.8em;
      border: solid transparent 1px;
      color: #000;
      &:hover {
        background-color: ${formColors.butonHoverColor};
        border: solid ${formColors.borderColor} 1px;
        color: ${formColors.textHoverColor};
      }
    }
  } */

  .deliveryForm {
    width: 100%;
    margin-top: 30px;
    /* background-color: grey; */
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
      max-width: 800px;
      /* background-color: grey; */

      label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 5px;
        /* margin-right: 10px; */
        width: 100%;
        color: #fff;
        height: 2em;
      }
      input {
        width: 100%;
        height: 50px;
        margin-bottom: 15px;
        font-size: 1.2rem;
        font-weight: bold;
        /* text-transform: capitalize; */
      }

      .customerDetails {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* background-color: grey; */
        ${desktop`
        flex-direction: row;
        `}
        ${tablet`
        flex-direction: row;
        `}
        ${mobile`
        flex-direction: column;
        `}

        div {
          width: 100%;
          margin-right: 5px;
          /* background-color: grey; */
        }
      }

      .contactDetails {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* background-color: grey; */
        ${desktop`
        flex-direction: row;
        `}
        ${tablet`
        flex-direction: row;
        `}
        ${mobile`
        flex-direction: column;
        `}

        div {
          width: 100%;
          margin-right: 5px;
          /* background-color: grey; */
        }
      }

      .city {
        width: 100%;
        div {
          width: 100%;
          margin-right: 5px;
          /* background-color: grey; */
        }
      }
      .address {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* background-color: grey; */
        ${desktop`
        flex-direction: row;
        `}
        ${tablet`
        flex-direction: row;
        `}
        ${mobile`
        flex-direction: column;
        `}

        div {
          width: 100%;
          margin-right: 5px;
          /* background-color: grey; */
        }
      }

      .addressDetails {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* background-color: grey; */
        ${desktop`
        flex-direction: row;
        `}
        ${tablet`
        flex-direction: row;
        `}
        ${mobile`
        flex-direction: column;
        `}

        div {
          width: 100%;
          margin-right: 5px;
          /* background-color: grey; */
        }
      }
      .interfon {
        width: 100%;
        div {
          width: 100%;
          margin-right: 5px;
          /* background-color: grey; */
        }
      }
      .changePasswordButton {
        margin-bottom: 25px;
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 0 40px 0;
        /* border-bottom: solid #fff 3px; */
        /* background-color: red; */
        .sendData {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          margin-top: 25px;
          padding: 10px 25px 10px 25px;
          border-radius: 50px;
          border: solid #ff2727 2px;
          background-color: #ba2525;
          color: #fff;
          cursor: pointer;
          &:hover {
            background-color: #711717;
            border: solid #ba2525 2px;
          }
          ${mobile`
          margin: 10px 0;
          width: 80%;
          `}
        }
      }
    }
  }
`

// export const ChangePasswordStyled = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   /* margin-top: 10%; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: ${formColors.formContainerBackground};
//   border-radius: 1em;
//   height: 20em;
//   h1 {
//     font-size: 1.5em;
//     font-weight: bold;
//   }

//   ${desktop`
//     // margin-top: 210px;
//     `}
//   ${tablet`
//     // margin-top: 130px;
//     `}
// ${mobile`
//     // margin-top: 220px;
//     `}
// `;

// export const ChangePasswordForm = styled.form`
//   margin: 1em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// export const ChangePasswordInput = styled.input`
//   border-radius: 0.2em;
//   outline: none;
//   border: none;
//   margin: 0.2em 0;
//   background-color: ${formColors.inputColor};
//   font-size: 2em;
//   width: 100%;
//   padding: 0.1em 0.2em;
// `;
// export const ChangePasswordButton = styled.button`
//   border-radius: 0.2em;
//   outline: none;
//   border: none;
//   margin: 0.2em 0;
//   background-color: ${formColors.butonColor};
//   font-size: 2em;
//   font-weight: bold;
//   width: 100%;
//   padding: 0.1em 0.2em;
//   border: solid transparent 1px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${formColors.butonHoverColor};
//     border: solid ${formColors.borderColor} 1px;
//     color: ${formColors.textHoverColor};
//   }
// `;

// export const LinkButtons = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
//   a {
//     border-radius: 0.2em;
//     outline: none;
//     border: none;
//     margin: 0.2em 0;
//     background-color: ${formColors.butonColor};
//     font-size: 1.1em;
//     font-weight: bold;
//     text-align: center;
//     width: auto;
//     padding: 0.3em 0.8em;
//     border: solid transparent 1px;
//     color: #000;
//     &:hover {
//       background-color: ${formColors.butonHoverColor};
//       border: solid ${formColors.borderColor} 1px;
//       color: ${formColors.textHoverColor};
//     }
//   }
// `;

export const ErrorLabel = styled.span`
  display: block;
  border-radius: 0.5em;
  outline: none;
  border: none;
  margin: 0.1em 0;
  /* color: ${addUserColors.errorTextColor}; */
  color: #fff;
  font-size: 1em;
  width: 100%;
  padding: 0.5em 0.3em;
  background-color: #f00;
`
