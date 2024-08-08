import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { COLORS } from '../../styles/setings/colors'

export const MainLayoutStyled = styled.div`
  width: 100%;

  .row.mainContent {
    background-color: ${COLORS.colorHeaderBackground};
    display: flex;
    margin-top: 30px;
    ${desktop`
      // height: 110px;
      align-items: flex-start;
      flex-wrap: nowrap;

      `}
    ${tablet` 
      // height: 120px;
      flex-wrap: wrap;
      // box-shadow: 0px 5px 7px #989898;
      `}
    ${mobile` 
      // height: 180px;
      flex-wrap: wrap;
      // box-shadow: 0px -5px 7px #989898;
      `}


    .categorys {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 10px;
      /* display: flex; */
      /* justify-content: flex-start; */
      width: 25%;
      max-width: 270px;
      /* border: solid #fff 1px; */
      padding: 10px;
      /* height: 67vh; */
      height: auto;
      background-color: ${COLORS.clolorBgAside};
      border-radius: 15px;
      margin-left: 10px;
      ${desktop` 
        flex-direction: column;
        justify-content: flex-start;
        `}
      ${tablet`
        display: none;
          `}
      ${mobile`
          display:none;
          `}
    }

    .content {
      /* display: flex; */
      /* justify-content: flex-start; */

      padding: 0 10px 10px 10px;
      /* height: 67vh; */
      height: auto;
      /* background-color: ${COLORS.clolorBgAside}; */
      /* border-radius: 15px 0 0 15px; */
      ${desktop`
      min-width: 75%;
      max-width: 100%;
          `}
      ${tablet`
          width: 100%;
          `}
      ${mobile`
          width: 100%;
          `}
    }
  }
`
