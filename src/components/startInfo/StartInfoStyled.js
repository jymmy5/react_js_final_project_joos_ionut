import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { COLORS } from '../../styles/setings/colors'

import { articleTitleH2, defaultTitleH2 } from '../../styles/setings/variables'

export const StartInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: auto;
  // padding: 20px 0 40px;
  // padding: 20px 10px;
  // max-width: 1080px;
  /* background-color: #0b0b0b; */
  padding: 20px 0;

  ${desktop`
    margin-top: 25px;
    `}
  ${tablet`
    margin-top: 25px;
    `}
 ${mobile`
    margin-top: 20px;
    `}


  .startInfoContainer {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: #ccc; */

    ${mobile`
    flex-direction: column;
    `}/* .facilitys {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: calc(50% - 15px);
      background-color: #1e1e1e;

      ${desktop`
      margin-right: 15px;
      border-radius: 25px;
      `}

      ${tablet`
      margin-right: 15px;
      border-radius: 25px;
      `}

      ${mobile`
        width: 100%;
        align-items: center;
        border-radius: 0;
        padding: 20px 0;
      `}
      h2 {
        ${articleTitleH2};
        
        margin-top: 10px;
        ${desktop`
          margin-left: 25px;
        `}
        ${tablet`
          margin-left: 25px;
          text-align: center;
        `}
        ${mobile`
          margin-left: 0;
          text-align: center;
        `}
      }
      ul {
        max-width: 1300px;
        margin-top: 10px;

        
        ${mobile` 
          display: block;
        `}
        .container .row .fac-li {
          height: auto;
          justify-self: center;
          align-items: center;
          padding: 10px;
          margin: 0 0 5px 10px;

          ${desktop` 
            width: calc(50% - 15px);
          `}
          ${tablet`
            width: calc(50% - 15px);
          `}
          ${mobile`
            width: calc(100% - 20px);
          `}
    
          li {
            font-size: 1.2em;
          
            text-align: center;
            font-weight: bold;

            ${desktop`
              font-size: 1em;
            `}
            ${tablet`
              font-size: 1em;
            `} 
            ${mobile`
              font-size: 1em;
            `};
          }
        }
      }
      
    } */

    /* .workingTimes {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: calc(50% - 15px);
      background-color: #2d2d2d;
      ${desktop`
        border-radius: 25px;
      `}

      ${tablet`
      border-radius: 25px;
      `}

      ${mobile`
        margin-top: 20px;
        width: 100%;
        align-items: center;
        padding: 25px 0;
        border-radius: 0;
      `}

      h2 {
        ${articleTitleH2};
       
        margin-top: 10px;
        ${desktop`
          margin-left: 25px;
        `}
        ${tablet`
          margin-left: 25px;
          text-align: center;
        `}
        ${mobile`
          margin-left: none;
          text-align: center;
        `}

      }
      ul {
        max-width: 1080px;
        margin-top: 10px;
        
        ${mobile` 
      display: block;`}
        .container .row .fac-li {
          height: auto;
          justify-self: center;
          align-items: center;
          padding: 10px;

          ${desktop` 
        width: calc(50% - 15px);
        `}

          ${tablet`
        width: calc(50% - 15px);
        `}

      ${mobile` 
        width: calc(50% - 10px);
      `}

      li {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

            ${desktop`
          font-size: 1.2em;
        `}
            ${tablet`
          font-size: 1.2em;
        `}
        ${mobile`
          font-size: 1.2em;
        `}
          }
        }
      }

      .weekDays {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background-color: ${COLORS.colorBgWeekDays};
        font-size: 1em;
        font-weight: bold;
        color: ${COLORS.colorFontWeekDays};
        border: solid ${COLORS.colorBorderWeekDays} 2px;
        margin-right: 15px;
      }

      .holydays {
        background-color: red;
        color: white;
      }
    } */
  }
`
