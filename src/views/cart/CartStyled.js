import styled from 'styled-components';
import { COLORS } from '../../styles/setings/colors';
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens';

export const CartStyled = styled.section`
  // margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  padding-bottom: 20px;
  // padding: 20px 0 40px 0;
  /* background-color: ${COLORS.colorAboutSectionBg}; */
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

  .productList {
    /* background-color: gray; */
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
    /* flex-wrap: nowrap; */
    margin: 15px auto;
    width: 100%;
    max-width: 800px;
    /* background-color: grey; */

    .cartItem {
      /* .row { */
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-bottom: 10px;
      /* height: auto; */
      /* background-color: gray; */
      border: solid ${COLORS.colorAboutBorder} 1px;
      padding: 0 10px 0 0;
      ${mobile`
        flex-direction: column;
        justify-content: center;
        padding: 0;
        `}
      .prodImage {
        display: flex;
        justify-content: flex-start;
        /* background-color: red; */
        /* width: 100px;
        min-width: 100px; */
        /* background-color: grey; */
        ${mobile`
          justify-content: center;
          align-items: center;
        `}

        img {
          height: 150px;
          width: 150px;
          ${mobile`
            height: 100%;
            width: 100%;
        `}
        }
      }
      .prodData {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        /* border: solid ${COLORS.colorAboutBorder} 1px; */
        width: 100%;
        height: 150px;
        /* padding: 15px 20px; */
        /* background-color: grey; */
        ${mobile`
        justify-content: center;
        align-items: center;
        height: auto;
        `}
        .prodName {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 1.3rem;
          font-weight: bold;
          margin-top: 10px;
          margin-left: 10px;
          /* background-color: grey; */
          width: 100%;
          height: 1.5rem;
          ${mobile`
          justify-content: center;
          `}
        }

        .quantity {
          display: flex;
          flex-wrap: nowrap;
          margin: 0 10px;
          ${mobile`
          margin: 10px auto;
          `}
          input {
            display: block;
            text-align: center; /* Center the text */
            font-size: 1.3em;
            font-weight: bold;
            -moz-appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }

          .increase {
            height: 25px;
            width: 25px;
            border-radius: 0 10px 10px 0;
            border: transparent;
            margin-left: 3px;
            /* padding-right: 5px; */
            font-size: 1.3em;
            font-weight: bold;
            cursor: pointer;
            &:hover {
              background-color: #ccc;
            }
            ${mobile`
            height: 40px;
            width: 40px;
            border-radius: 0 20px 20px 0;
          `}
          }
          .decrease {
            height: 25px;
            width: 25px;
            border-radius: 10px 0 0 10px;
            border: transparent;
            margin-right: 3px;
            padding-left: 10px;
            font-size: 1.3em;
            font-weight: bold;
            cursor: pointer;
            &:hover {
              background-color: #ccc;
            }
            ${mobile`
            height: 40px;
            width: 40px;
            border-radius: 20px 0 0 20px;
          `}
          }

          .quantityInput {
            height: 25px;
            width: 30px;
            border: transparent;
            ${mobile`
            height: 40px;
            width: 40px
          `}
          }
          .quantitySelect {
            height: 30px;
            width: 80px;
            border-radius: 5px;
          }
        }

        .totalProdPrice {
          font-size: 1.3rem;
          font-weight: bold;
          margin-left: 15px;
          margin-bottom: 15px;
          span {
            font-size: 1.8rem;
            font-weight: bold;
          }
        }
      }

      .prodRemove {
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          padding: 6px 15px 4px 15px;
          border-radius: 20px;
          border: solid #ff0000 2px;
          background-color: #940000;
          color: #fff;
          cursor: pointer;
          &:hover {
            background-color: #e00000;
            border: solid #ff0000 2px;
          }
          ${mobile`
          margin: 10px 0;
          width: 250px;
          `}
        }
      }
      /* } */
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    max-width: 500px;
    font-size: 1.3em;
    font-weight: bold;
    .totalOrder {
      font-size: 1.3em;
      font-weight: bold;
      ${mobile`
      font-size: 1em;
      `}
    }
    .totalOrderPrice {
      font-size: 2.2em;
      font-weight: bold;
      .currency {
        font-size: 1.8rem;
        ${mobile`
      font-size: 1.5rem;
      `}
      }
      ${mobile`
      font-size: 1.4em;
      `}
    }
  }
  .deliveryDataB {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    /* background-color: grey; */

    .deliveryDataButton {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      margin-top: 25px;
      padding: 6px 25px 4px 25px;
      border-radius: 20px;
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

  .emptyCart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 30px;
    font-size: 1.5em;
    font-weight: bold;
  }
`;

// ul {
//   /* background-color: gray; */
//   display: flex;
//   /* justify-content: center; */
//   /* align-items: center; */
//   flex-direction: column;
//   /* flex-wrap: nowrap; */
//   margin: 15px auto;
//   width: 100%;
//   max-width: 1300px;
//   /* background-color: grey; */

//   li {
//     /* .row { */
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     margin-bottom: 10px;
//     /* height: auto; */
//     /* background-color: gray; */
//     border: solid ${COLORS.colorAboutBorder} 1px;
//     padding: 0 10px 0 0;
//     ${mobile`
//       flex-direction: column;
//       justify-content: center;
//       padding: 0;
//       `}
//     .prodImage {
//       display: flex;
//       justify-content: flex-start;
//       /* background-color: red; */
//       /* width: 100px;
//       min-width: 100px; */
//       /* background-color: grey; */
//       ${mobile`
//         justify-content: center;
//         align-items: center;
//       `}

//       img {
//         height: 150px;
//         width: 150px;
//         ${mobile`
//           height: 100%;
//           width: 100%;
//       `}
//       }
//     }
//     .prodData {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       align-items: flex-start;
//       /* border: solid ${COLORS.colorAboutBorder} 1px; */
//       width: 100%;
//       height: 150px;
//       /* padding: 15px 20px; */
//       /* background-color: grey; */
//       ${mobile`
//       justify-content: center;
//       align-items: center;
//       height: auto;
//       `}
//       .prodName {
//         display: flex;
//         align-items: center;
//         justify-content: flex-start;
//         font-size: 1.3rem;
//         font-weight: bold;
//         margin-top: 10px;
//         margin-left: 10px;
//         /* background-color: grey; */
//         width: 100%;
//         height: 1.5rem;
//         ${mobile`
//         justify-content: center;
//         `}
//       }

//       .quantity {
//         display: flex;
//         flex-wrap: nowrap;
//         margin: 0 10px;
//         ${mobile`
//         margin: 10px auto;
//         `}
//         input {
//           display: block;
//           text-align: center; /* Center the text */
//           font-size: 1.3em;
//           font-weight: bold;
//           -moz-appearance: textfield;
//           &::-webkit-outer-spin-button,
//           &::-webkit-inner-spin-button {
//             -webkit-appearance: none;
//             margin: 0;
//           }
//         }

//         .increase {
//           height: 25px;
//           width: 25px;
//           border-radius: 0 10px 10px 0;
//           border: transparent;
//           margin-left: 3px;
//           /* padding-right: 5px; */
//           font-size: 1.3em;
//           font-weight: bold;
//           cursor: pointer;
//           &:hover {
//             background-color: #ccc;
//           }
//           ${mobile`
//           height: 40px;
//           width: 40px;
//           border-radius: 0 20px 20px 0;
//         `}
//         }
//         .decrease {
//           height: 25px;
//           width: 25px;
//           border-radius: 10px 0 0 10px;
//           border: transparent;
//           margin-right: 3px;
//           padding-left: 10px;
//           font-size: 1.3em;
//           font-weight: bold;
//           cursor: pointer;
//           &:hover {
//             background-color: #ccc;
//           }
//           ${mobile`
//           height: 40px;
//           width: 40px;
//           border-radius: 20px 0 0 20px;
//         `}
//         }

//         .quantityInput {
//           height: 25px;
//           width: 30px;
//           border: transparent;
//           ${mobile`
//           height: 40px;
//           width: 40px
//         `}
//         }
//         .quantitySelect {
//           height: 30px;
//           width: 80px;
//           border-radius: 5px;
//         }
//       }

//       .totalProdPrice {
//         font-size: 1.3rem;
//         font-weight: bold;
//         margin-left: 15px;
//         margin-bottom: 15px;
//         span {
//           font-size: 1.8rem;
//           font-weight: bold;
//         }
//       }
//     }

//     .prodRemove {
//       button {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 1.5em;
//         font-weight: bold;
//         text-align: center;
//         text-transform: uppercase;
//         padding: 6px 15px 4px 15px;
//         border-radius: 20px;
//         border: solid #ff0000 2px;
//         background-color: #940000;
//         color: #fff;
//         cursor: pointer;
//         &:hover {
//           background-color: #e00000;
//           border: solid #ff0000 2px;
//         }
//         ${mobile`
//         margin: 10px 0;
//         width: 250px;
//         `}
//       }
//     }
//     /* } */
//   }
// }
