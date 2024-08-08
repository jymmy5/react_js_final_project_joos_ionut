import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { COLORS } from '../../styles/setings/colors'

export const HeaderStyled = styled.header`
  margin: auto;
  width: 100%;
  top: 0;

  // height: 70px;
  .row.header {
    padding: 0.5em;
    background-color: ${COLORS.colorHeaderBackground};
    display: flex;
    flex-wrap: nowrap;
    // justify-content: center;
    ${desktop`
      height: 110px;
      align-items: flex-start;
      // box-shadow: 0px 5px 7px #989898;
      `}
    ${tablet` 
      height: 120px;
      box-shadow: 0px 5px 7px #989898;
      `}
    ${mobile` 
      height: 180px;
      box-shadow: 0px 5px 7px #989898;
      `}

    // .logo
    .identity {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
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
          margin-left: 0px;
 
          `}
        .logoImg {
          display: flex;
          justify-content: flex-start;

          img {
            height: 80px;
            max-width: 160px;
            margin: 0 15px 0 0;
            /* ${mobile`
            height: 70px;
            // position: absolute;
            top: 10px;
            left: 10px;
            `} */
          }
          .logo-icon {
            background-color: ${COLORS.colorLogoIconBg};
            border-radius: 5px;
            font-family: $logo-font-family;
            color: ${COLORS.colorLogoIconText};
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
              text-align: center;
              `}
          }
          .logoText {
            display: flex;
            justify-content: center;
            font-weight: bold;
            margin-left: 15px;
            letter-spacing: 0.2em;

            ${desktop`
              font-size: 1.2em;
              `}
            ${tablet`
              font-size: 1.2em;
              `}
            ${mobile`
              // margin-left: 0;
              font-size: 0.9em;
              `}
          }
        }
      }
    }
    .acountButons {
      position: absolute;
      right: 4em;
      top: 1.5em;
      width: auto;
      height: 2.1em;
      /* cursor: pointer; */
      /* background-color: grey; */
      ${desktop`
    display: none;
  `}
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

    .userActions {
      ${tablet`
        display: none;
        `}
    }
    .userMenu {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      height: 40px;

      // ${tablet`
      //   display: none;
      // `}

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
          .buttonLogin {
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

    .search .container {
      margin-top: 10px;
      .row {
        .searchBar {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          ${tablet`
            width: 100%;
            justify-content: center;
            `}

          ${mobile`
            width: 100%;
            justify-content: center;
            `}

          form {
            ${tablet`
              width: 300px;
              `}

            ${mobile`
              width: 300px;
              `}
            .searchInput {
              position: relative;
              input {
                display: inline-block;
                border: none;
                border-bottom: solid ${COLORS.colorBgSearchButton} 2px;
                // border-bottom-left-radius: 15px 15px;
                // border-top-left-radius: 15px 15px;
                border-radius: 15px;
                height: 1.6em;
                width: 190px;
                color: $black;
                font-size: 1em;
                // font-weight: bold;
                text-align: center;
                ${tablet`
                  width: 100%;
                  `}

                &:focus {
                  background-color: #ccc;
                  border-bottom: none;
                  border-radius: 50px;
                  border: transparent;

                  &::placeholder {
                    color: transparent;
                  }
                }
              }
              .searchBtn {
                position: absolute;
                background-color: ${COLORS.colorBgSearchButton};
                color: ${COLORS.colorTextSearchButton};
                border-radius: 50%;
                border: none;
                left: 0;
                top: 1px;
                height: 1.7em;
                width: 1.7em;
                padding: 5px;
                &:hover {
                  background-color: ${COLORS.buttonColorHoverDefault};
                }
              }
            }
          }
        }
      }
    }
  }

  /* nav {
    ${tablet`
      display: none;
      `}
    .headerNav {
      .headerButtons {
        background-color: ${COLORS.colorButBgHeaderMenu};

        ${desktop`
          height: 60px;
          box-shadow: 0px 5px 7px #989898;
          `}
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;

          li {
            width: auto;

            a {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: ${COLORS.colorButBgHeaderMenu};
              color: ${COLORS.colorButTexHeaderMenu};
              border: solid ${COLORS.colorButBorderHeaderMenu} 1px;
              height: 60px;
              // margin: 0 1px;
              padding: 10px 15px;
              font-size: 1em;
              font-weight: bold;

              i {
                display: block;
                font-size: 2em;
              }
              span {
                font-size: 1em;
              }
              &.active {
                color: ${COLORS.colorButActiveTextHeaderMenu};
                border: solid ${COLORS.colorButActiveBorderHeaderMenu} 1px;
                border-radius: 5px;
                background-color: ${COLORS.colorButActiveBgHeaderMenu};
              }
              &:hover {
                color: ${COLORS.colorButHovTextHeaderMenu};
                background-color: ${COLORS.colorButHovBgHeaderMenu};
                border: solid ${COLORS.colorButHovBorderHeaderMenu} 1px;
              }
            }
          }
        }
      }
    }
  } */
`
