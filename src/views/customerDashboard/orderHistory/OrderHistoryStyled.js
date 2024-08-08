import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens';
import { articleTitleH2 } from '../../../styles/setings/variables';
import { COLORS } from '../../../styles/setings/colors';

export const OrderHistoryStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  border: solid ${COLORS.colorAboutBorder} 1px;
  border-radius: 10px;
  padding: 15px 0;
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
  h2 {
    display: inline-flex;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${COLORS.colorTextUnderlineDefault};
    /* background-color: grey; */

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
  .orders {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .customerOrdersList {
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

      .orderNumber {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* min-width: 100px; */ /*  */
        background-color: #404040;

        ${desktop`
        padding: 10px 20px; 
      `}
        ${tablet`
        padding: 10px 20px;
      `}
      ${mobile`
      border-radius: 55px;
      margin-top: 10px;
      margin-left: 10px;
      padding: 10px 20px;
      `}
      span {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          font-weight: bold;
          h4 {
            margin-left: 5px;
            font-size: 1.2em;
            font-weight: bold;
          }
        }

        .orderStatus {
          margin-top: 5px;
          font-size: 0.8em;
        }
        .orderDate {
          margin-top: 5px;
          font-size: 0.8em;
        }
      }
    }
    .orderPrice {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* border: solid ${COLORS.colorAboutBorder} 1px; */
      width: 100%;
      height: auto;
      padding: 5px 15px;

      /* background-color: grey; */
      /* ${mobile`
        justify-content: center;
        align-items: center;
        height: auto;
        `} */

      .orderValue {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        /*font-size: 1.3rem;
        font-weight: bold;
        /* margin-top: 10px;
        margin-left: 10px; */
        /* background-color: grey; */
        width: 100%;
        height: 1.5rem;
        ${mobile`
          justify-content: center;
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
        }
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 270px;
      /* padding: 10px 0; */
      background-color: #404040;
      ${mobile`
        width: 100%;
        margin-top: 15px;
        // flex-direction: row;
        justify-content: center;
        padding: 10px;
          `}

      /* background-color: blue; */
      .viewOrder {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 150px;
        font-size: 1em;
        font-weight: bold;
        text-align: center;
        /* text-transform: uppercase; */
        /* margin-top: 10px; */
        padding: 15px 0;
        margin: 10px 0;
        border-radius: 20px;
        border: solid #1c1c1c 2px;
        background-color: #646464;
        color: #fff;
        cursor: pointer;
        &:hover {
          background-color: #1c1c1c;
          border: solid #646464 2px;
          color: #fff;
        }
        ${mobile`
          width: 250px;
          `}
      }
    }
  }
`;
