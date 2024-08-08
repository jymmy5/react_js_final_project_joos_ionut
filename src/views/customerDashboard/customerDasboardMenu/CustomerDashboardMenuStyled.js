import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens'
import { COLORS } from '../../../styles/setings/colors'

export const CustomerDashboardMenuStyled = styled.div`
  /* border: solid #fff 1px; */
  height: auto;
  width: 100%;
  /* margin: auto; */
  ${desktop`
       display:none;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
     `}
  ${tablet`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
     `}
  ${mobile`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     `}


  .catTitle {
    width: 100%;
    display: flex;
    /* border: solid #fff 1px; */
    padding: 10px 0;
    background-color: #2c2c2c;

    h2 {
      display: inline-flex;
      text-decoration: underline;
      text-decoration-thickness: 4px;
      text-decoration-color: ${COLORS.colorTextUnderlineDefault};
      ${desktop`
       font-size: 1.5em;
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
      margin-left: 0;
      font-size: 1.3em;
    `}
    }
  }

  .row.categoryList {
    width: 100%;
    margin-top: 20px;
    ${tablet`
        width: 100%
        `}
    .tumbnailCategory {
      display: flex;
      justify-content: center;
      width: 250px;
      border-radius: 15px;
      margin: 0px 10px 10px 10px;
      background-color: #121212;
      ${tablet`
        width: auto;
        padding: 0 25px;
        `}

      &:hover {
        color: ${COLORS.colorUserHovTextMenu};
        background-color: ${COLORS.colorUserHovBgMenu};
        /* border: solid ${COLORS.colorUserHovBorderMenu} 1px; */
      }

      .tumbnailImg {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          width: 95%;
          border-radius: 15px;
          margin-top: 25px;
          max-height: 130px;
          ${mobile`
        display: none;
        `}
        }
      }
      .categoryName {
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 1.8em; */
        margin: 1em 0;
        ${tablet`
        
        `}
        h2 {
          font-size: 1em;
          font-weight: bold;
          color: #fff;
        }

        /* ${mobile`
      width: 100%;
      `} */
      }
    }
  }

  /*       
      &:hover {
        color: ${COLORS.colorUserHovTextMenu};
        background-color: ${COLORS.colorUserHovBgMenu};
         border: solid ${COLORS.colorUserHovBorderMenu} 1px; 
      } */
`
