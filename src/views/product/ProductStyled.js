import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { COLORS } from '../../styles/setings/colors'

export const ProductStyled = styled.div`
  /* border: solid #fff 1px; */
  height: auto;
  width: 100%;
  /* margin: auto; */

  .shortNav {
    font-size: 1.1em;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: #ccc;
    }
  }

  .row.productContainer {
    width: 100%;
    border: solid #2c2c2c 2px;

    /* .productName {
      display: flex;
      align-items: center;
      height: 1.8em;
      padding-left: 1em;
      margin-bottom: 1em;
      h1 {
        font-size: 1.2em;
        font-weight: bold;
      }
    } */

    .productDetailsImg {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-top: 10px;
      ${mobile`
      flex-direction: column;
      `}
      .foto {
        width: 50%;
        /* background-color: blue; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 5px 10px;
        ${mobile`
      width: 100%;
      `}
        .bigImg {
          width: 100%;
          min-height: 300px;
          /* padding: 5px 10px; */
          border-radius: 25px;
        }
        .tumbnails {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          width: 100%;
          /* background-color: pink; */
          .tumbnailImg {
            width: 70px;
            padding: 5px;
          }
        }
      }

      .productDetailsData {
        width: 50%;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        ${mobile`
        margin-top: 25px;
      width: 100%;
      `}

        .productName {
          width: 100%;
          display: flex;
          /* border: solid #fff 1px; */
          padding: 10px 0;
          background-color: #2c2c2c;
          /* border-radius: 15px 15px 0 0; */

          h1 {
            display: inline-flex;
            text-decoration: underline;
            text-decoration-thickness: 4px;
            text-decoration-color: ${COLORS.colorTextUnderlineDefault};

            ${desktop`
            align-items: center;
            justify-content: flex-start;    
            width: 100%;
            font-size: 1.7em;
            font-weight: bold;
            padding-left: 15px
          `}
            ${tablet`
            align-items: center;
            justify-content: flex-start;    
            width: 100%;
            font-size: 1.5em;
            padding-left: 15px
          `}
          ${mobile`
              align-items: center;
              justify-content: center;    
              width: 100%;
            font-size: 1.3em;
          `}
          }
        }

        .prodWeight {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          margin: 15px auto;
          color: white;
          font-size: 1.2em;
          font-weight: bold;
          text-indent: 20px;
          ${mobile`
          justify-content: center;
          padding: 10px 0;
          `}
        }

        .price {
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          width: 100%;
          padding: 0;
          color: white;
          font-size: 2em;
          font-weight: bold;
          ${mobile`
          width: 50%;
          height: 50px;
          justify-content: center;
          align-items: center;
          border-radius: 25px;
          background-color: grey;
          `}
          span {
            margin-left: 10px;
            padding-bottom: 2px;
            font-size: 0.8em;
          }
        }

        .stock {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          padding: 0;
          color: white;
          font-size: 1em;
          ${mobile`
            justify-content: flex-start;
            padding: 10px 0;
          `}
        }

        .prodDescription {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          margin-top: 10px;
          color: white;
          font-size: 1em;
          line-height: 1.3em;
          letter-spacing: 1px;
          word-spacing: 3px;
          white-space: pre-wrap;
          ${mobile`
          justify-content: flex-start;
          padding: 10px 0;
          `}
        }
        .frozenProduct {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          background-color: #f00;
          padding: 10px;
          font-size: 1.2em;
          font-weight: bold;
          line-height: 1.3em;
          letter-spacing: 1px;
          word-spacing: 3px;
          white-space: pre-wrap;
          color: #fff;
          ${mobile`
          justify-content: center;
          `}
        }

        .ingredients {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          color: white;
          /* background-color: grey; */
          padding: 10px 0;
          font-size: 1.2em;
          line-height: 1.3em;
          letter-spacing: 1px;
          word-spacing: 3px;
          white-space: pre-wrap;
          span {
            margin-right: 10px;
            font-weight: bold;
          }
        }

        .allergens {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          color: white;
          /* background-color: grey; */
          padding: 10px 0;
          font-size: 1.2em;
          line-height: 1.3em;
          letter-spacing: 1px;
          word-spacing: 3px;
          white-space: pre-wrap;
          span {
            margin-right: 10px;
            font-weight: bold;
          }

          ${mobile`
          // justify-content: center;
          `}
        }

        .nutritionalDeclaration {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          color: white;
          /* background-color: grey; */
          padding: 10px 0;
          font-size: 1.2em;
          line-height: 1.3em;
          letter-spacing: 1px;
          word-spacing: 3px;
          white-space: pre-wrap;
          span {
            margin-right: 10px;
            font-weight: bold;
          }

          ${mobile`
          // justify-content: center;
          `}
        }

        .energeticValue {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          color: white;
          /* background-color: grey; */
          padding: 10px 0;
          font-size: 1.2em;
          line-height: 1.3em;
          letter-spacing: 1px;
          word-spacing: 3px;
          white-space: pre-wrap;
          span {
            margin-right: 10px;
            font-weight: bold;
          }

          ${mobile`
          // justify-content: center;
          `}
        }
        /* .addToCart {
          width: 100%;
        } */
      }
    }
  }
`
