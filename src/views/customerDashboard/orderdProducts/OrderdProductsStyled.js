import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens'
import { articleTitleH2 } from '../../../styles/setings/variables'
import { COLORS } from '../../../styles/setings/colors'

export const OrderdProductsStyled = styled.section`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* justify-content: center;
  align-items: center; */
  border: solid ${COLORS.colorAboutBorder} 1px;
  border-radius: 10px;
  padding: 15px 0;
  background-color: #1c1c1c;
  ${desktop`
    padding: 5px 10px;
    margin-top: 25px;
  `}
  ${tablet`
    margin-top: 25px;
  `}
  ${mobile`
    // flex-direction: row;
    // flex-wrap: wrap;
    margin-top: 25px;
  `}
    .cancelButton {
    margin-bottom: 25px;
    width: 100%;
    /* max-width: 800px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 0 5px 0;
    /* border-bottom: solid #fff 3px; */
    /* background-color: red; */
    .sendOrder {
      width: 600px;
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
  h2 {
    display: inline-flex;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${COLORS.colorTextUnderlineDefault};
    /* background-color: grey; */
    text-align: center;

    ${desktop`
        align-items: flex-end;
        justify-content: flex-start;    
        // width: 100%;
        // margin-left: 5px;
        font-size: 1.5rem;
        font-weight: bold;
      `}
    ${tablet`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 1.5rem;
        font-weight: bold;
      `}
    ${mobile`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 1.5rem;
        font-weight: bold;
    `}
  }
  .productsContainer {
    .orderProductsList {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      background-color: #252525;
      width: 100%;
      margin-top: 10px;
      ${mobile`
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: center;
    align-items: center;
  `}

      .productImage {
        display: flex;
        justify-content: center;
        align-items: center;
        /* min-width: 100px; */ /* background-color: red; */
        ${mobile`
        display: none;
      `}
        img {
          height: 120px;
          margin-left: 5px;
          ${mobile`
            height: 100%;
            width: 100%;
        `}
        }
      }
    }
    .productData {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      /* border: solid ${COLORS.colorAboutBorder} 1px; */
      width: 100%;
      /* height: auto; */
      height: 150px;
      padding: 5px 15px;

      /* background-color: grey; */
      ${mobile`
        justify-content: flex-start;
        align-items: flex-start;
        height: auto;
        `}
      span {
        font-size: 1rem;
        font-weight: bold;
        margin-right: 5px;
      }
      .productName {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        font-size: 1.3rem;
        font-weight: bold;
        /* margin-top: 10px;
        margin-left: 10px; */
        /* background-color: grey; */
        width: 100%;
        height: 1.5rem;
        ${mobile`
          justify-content: center;
          `}
        /* span {
          font-size: 1rem;
          font-weight: bold;
        } */
        h3 {
          display: inline-flex;
          width: 100%;
          font-size: 1em;
          font-weight: bold;

          ${desktop`
        // align-items: flex-end;
        // justify-content: flex-start;    
        `}
          ${tablet`
        // align-items: center;
        // justify-content: center; 
        `}
        ${mobile`
        // align-items: center;
        // justify-content: center;
        `}
        }
      }

      .productDetails {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        margin: 3px 0;
        width: 100%;
        /* background-color: grey; */
        /* ${mobile`
          margin: 10px auto;
          `} */
        .quantity {
          font-size: 1.3em;
          font-weight: bold;
        }
      }
    }
    .orderPrice {
      display: flex;
      flex-direction: column;
      /* justify-content: center;
    align-items: center; */
      /* align-items: flex-end;
    justify-content: flex-end; */
      width: 270px;
      /* padding: 10px 0; */
      background-color: #404040;
      ${mobile`
        width: 100%;
        // margin-top: 15px;
        flex-direction: row;
        justify-content: center;
        // padding: 10px;
          `}
      span {
        font-size: 1em;
        font-weight: bold;
        margin: 0 5px;
      }

      h3 {
        font-size: 1.3em;
        font-weight: bold;
        ${desktop`
        // align-items: flex-end;
        // justify-content: flex-start;    
        `}
        ${tablet`
        // align-items: center;
        // justify-content: center; 
        `}
        ${mobile`
        // align-items: center;
        // justify-content: center;
        `}
            span {
          font-size: 1rem;
          font-weight: bold;
          margin: 0 5px;
        }
      }
    }
  }
`
