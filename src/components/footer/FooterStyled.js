import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { COLORS } from '../../styles/setings/colors'

export const FooterStyled = styled.footer`
  /* position: absolute; */
  /* margin: auto; */
  width: 100%;
  /* bottom: 0; */
  height: auto;
  .row.footer {
    padding: 0.5em;
    margin-top: 25px;
    background-color: ${COLORS.colorHeaderBackground};
    display: flex;
    /* flex-wrap: nowrap; */
    // justify-content: center;
    ${desktop`
      // height: 110px;
      align-items: flex-start;
      flex-wrap: nowrap;
      box-shadow: 0px -1px 7px #989898;
      `}
    ${tablet` 
      // height: 120px;
      flex-wrap: nowrap;
      box-shadow: 0px 5px 7px #989898;
      `}
    ${mobile` 
      // height: 180px;
      flex-wrap: wrap;
      box-shadow: 0px -5px 7px #989898;
      `}

    // .logo
    .companyData {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 70px;

      ${mobile` 
        flex-direction: row;
        justify-content: flex-start;
        `}

      .logo {
        display: flex;
        flex-direction: row;
        width: 100%;
        ${desktop` 
          margin-top: 5px;
          margin-left: 10px;
        `}
        ${tablet`
          margin-top: 15px;
          margin-left: 10px;
          `}
        ${mobile`
          // height: 190px;
          flex-direction: column;

          margin-top: 5px;
          margin-left: 5px;
          `}
        .logoImg {
          display: flex;
          justify-content: flex-start;
          img {
            height: 80px;
            max-width: 160px;
            margin: 0 15px 0 0;
            /* // ${mobile`
            //   height: 90px;
            // `} */
          }
          .logo-icon {
            background-color: ${COLORS.logoBackground};
            border-radius: 5px;
            font-family: $logo-font-family;
            color: $white;
            font-size: 2.5em;
            padding: 0 0.2em;
            margin-bottom: 0.2em;
            letter-spacing: 0.2rem;
            text-decoration: none;
          }

          ${mobile`
            // height: 190px;
            justify-content: space-between;
            width: auto;
            // margin: 10px;
            `}
        }
        .identityTitles {
          ${desktop``}
          ${tablet``}
          ${mobile`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            `}
          h2 {
            padding: 10px 10px 10px 0;
            margin-left: 15px;
            text-decoration: underline;
            text-decoration-thickness: 4px;
            text-decoration-color: ${COLORS.colorTextUnderlineDefault};
            span {
              font-weight: bold;
            }
            ${desktop`
              font-size: 1.7em;
              `}
            ${tablet`
              font-size: 1.7em;
              `}
            ${mobile`
              margin-left: 0;
              font-size: 1.6em;
              `}
          }
        }
      }
    }
    .userActions {
      ${tablet`
        display: none;
        `}
    }
    .socialMedia {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      height: 70px;

      ${mobile`
         justify-content: center;
       `}

      ul {
        li {
          display: inline-block;
          font-size: 0.8em;
          margin-left: 0.1em;
          // margin-top: 1em;
          margin-right: 0.5em;
          a {
            background-color: ${COLORS.colorUserBgMenu};
            border: solid ${COLORS.colorUserBorderMenu} 1px;
            border-radius: 5px;
            padding: 0.5em 0.8em;
            color: ${COLORS.colorUserTextMenu};
            font-weight: bold;
            &.active {
              color: ${COLORS.colorUserActiveTextMenu};
              background-color: ${COLORS.colorUserActiveBgMenu};
              border: solid ${COLORS.colorUserActiveBorderMenu} 1px;
            }
            &:hover {
              color: ${COLORS.colorUserHovTextMenu};
              background-color: ${COLORS.colorUserHovBgMenu};
              border: solid ${COLORS.colorUserHovBorderMenu} 1px;
            }
          }
        }
      }
    }
  }
`
