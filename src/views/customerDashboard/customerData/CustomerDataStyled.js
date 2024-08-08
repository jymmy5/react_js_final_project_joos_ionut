import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens';
import { articleTitleH2 } from '../../../styles/setings/variables';
import { COLORS } from '../../../styles/setings/colors';

export const CustomerDataStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: solid ${COLORS.colorAboutBorder} 1px;
  border-radius: 10px;
  padding: 15px 0;
  ${desktop`
    padding: 5px 10px;
  `}
  /* ${tablet`
    margin-top: 20px;
  `} */
  /* ${mobile`
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
  `} */
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

  .customerDetailsList {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    /* background-color: grey; */

    width: 100%;
    margin-top: 10px;
    ${mobile`
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: center;
    align-items: center;
    
  `}

    .customerImage {
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
    .customerData {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      /* border: solid ${COLORS.colorAboutBorder} 1px; */
      width: 100%;
      height: auto;
      padding: 5px 15px;

      /* background-color: grey; */
      ${mobile`
        // justify-content: center;
        // align-items: center;
        height: auto;
        `}
      span {
        font-size: 1rem;
        font-weight: bold;
        margin-right: 5px;
      }
      .customerName {
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
          /* text-decoration: underline; */
          /* text-decoration-thickness: 4px; */
          /* text-decoration-color: ${COLORS.colorTextUnderlineDefault}; */
          /* background-color: grey; */
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

      .customerDetails {
        display: flex;
        flex-wrap: nowrap;
        margin: 3px 0;
        width: 100%;
        /* background-color: grey; */
        /* ${mobile`
          margin: 10px auto;
          `} */
      }
    }
    .customerButtons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 250px;
      padding: 10px 0;
      ${mobile`
        width: 100%;
        margin-top: 15px;
        // flex-direction: row;
        justify-content: center;
        padding: 10px;
          `}

      /* background-color: blue; */
      .modifyData {
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
        border: solid #0c5c44 2px;
        background-color: #20c997;
        color: #000;
        cursor: pointer;
        &:hover {
          background-color: #0c5c44;
          border: solid #20c997 2px;
          color: #fff;
        }
        ${mobile`
          width: 250px;
          `}
      }
      .passwordReset {
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
        border: solid #940000 2px;
        background-color: #e00000;
        color: #fff;
        cursor: pointer;
        &:hover {
          background-color: #940000;
          border: solid #ff0000 2px;
        }
        ${mobile`
          width: 250px;
          `}
      }
    }
  }
`;
