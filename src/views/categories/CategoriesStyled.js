import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens';
import { COLORS } from '../../styles/setings/colors';

export const CategoriesStyled = styled.div`
  /* border: solid #fff 1px; */
  height: auto;
  background-color: #202020;
  border-radius: 15px 15px 0 0;

  ${desktop`
    margin-top: 0;
     width: 100%;
    `}
  ${tablet`
    margin-top: 20px;
     width: 100%;
    `}
  ${mobile`
    margin-top: 20px;
     width: 100%;
    `}
    
  .catTitle {
    width: 100%;
    display: flex;
    /* border: solid #fff 1px; */
    padding: 10px 0;
    background-color: #2c2c2c;
    border-radius: 15px 15px 0 0;

    h2 {
      display: inline-flex;
      text-decoration: underline;
      text-decoration-thickness: 4px;
      text-decoration-color: ${COLORS.colorTextUnderlineDefault};

      ${desktop`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 1.5em;
      `}
      ${tablet`
        align-items: center;
        justify-content: center;    
        width: 100%;
        font-size: 1.5em;
      `}
    ${mobile`
        align-items: center;
        justify-content: center;    
        width: 100%;
      font-size: 1.3em;
    `}
    }
  }

  .row.productList {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;

    ${desktop`
    margin-top: 20px;
    `}

    .tumbnailProduct {
      display: flex;
      justify-content: center;
      flex-direction: column;
      /* border-radius: 15px 15px 0px 0; */
      border-radius: 15px;
      margin: 0px 10px 30px 10px;
      /* background-color: #121212; */
      background-color: #2c2c2c;
      /* border: solid #fff 1px; */
      ${desktop`
      justify-content: space-between;
      min-width: 220px;
      width: 18%;
      height: 435px;
      `}
      ${tablet`
      justify-content: space-between;
      min-width: 240px;
      width: 30%;
      height: 435px;
      `}
      ${mobile`
      width: 100%;
      height: auto;
      `}

      .tumbnailImg {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          width: 85%;
          border-radius: 15px;
          margin-top: 1em;
        }
      }
      .productName {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.8em;
        margin: 1em 0;
        h2 {
          font-size: 1em;
          font-weight: bold;
          color: #fff;
        }

        /* ${mobile`
      width: 100%;
      `} */
      }

      .prodDescription {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-left: 10px;
        color: white;
        font-size: 1em;

        ${mobile`
          justify-content: flex-start;
          padding: 10px 0;
          `}
      }
      .prodWeight {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: auto;
        color: white;
        font-size: 1em;
        font-weight: bold;

        ${mobile`
          justify-content: center;
          padding: 10px 0;
          `}
      }

      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: grey;
        margin-top: 10px;
        padding: 10px 0;
        font-weight: bold;
        /* border-radius: 0 0 15px 15px; */
      }

      .stock {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        /* background-color: grey; */
        padding: 10px 0;
        font-weight: bold;
      }
      .frozenProduct {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        /* background-color: grey; */
        padding: 10px 0;
        height: 1.8em;
        font-weight: bold;
      }
    }
    .noProducts {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px auto;
      }
    }
  }
`;
