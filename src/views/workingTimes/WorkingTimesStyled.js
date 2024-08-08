import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { articleTitleH2 } from '../../styles/setings/variables'
import { COLORS } from '../../styles/setings/colors'
// import { alignment } from '../../../styles/setings/setings'

export const WorkingTimesStyled = styled.div`
  width: calc(50% - 15px);
  height: 310px;
  background-color: #2d2d2d;

  /* width: 300px; */

  ${desktop`
        border-radius: 25px;
      `}

  ${tablet`
      border-radius: 25px;
      `}

      ${mobile`
        margin-top: 20px;
        width: 100%;
        height: auto;
        align-items: center;
        padding: 25px 0;
        border-radius: 0;
      `}


  h2 {
    ${articleTitleH2};
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: #ccc; */
    ${desktop` 

      `}
    ${tablet` 
      margin-left: 0;
      text-align: center;
      `}
   ${mobile` 
      margin-left: none;
      text-align: center;`}
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
      margin: 0px 0px 5px 10px;
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
  /* } */
`
