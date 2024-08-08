import styled from 'styled-components'
import { COLORS, addUserColors, formColors } from '../../styles/setings/colors'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'

export const RegisterStyled = styled.section`
  // margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 30px auto; */
  /* padding-bottom: 20px; */
  // padding: 20px 0 40px 0;
  background-color: ${COLORS.colorAboutSectionBg};
  /* background-color: grey; */
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

  .registerLink {
    margin-bottom: 25px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px 0 40px 0;
    border-bottom: solid #fff 3px;
    /* background-color: red; */
    a {
      border-radius: 4em;
      outline: none;
      border: none;
      /* margin: 0.2em 0; */
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
  }

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
      .orderButton {
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
    }
  }
`
export const AddUserErrorLabel = styled.span`
  border-radius: 0.2em;
  outline: none;
  border: none;
  margin: 0.1em 0;
  color: ${addUserColors.errorTextColor};
  font-size: 1em;
  width: 100%;
  padding: 0.05em 0.2em;
`
