import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { articleTitleH2, defaultTitleH2 } from '../../styles/setings/variables'
import { COLORS } from '../../styles/setings/colors'
// import { alignment } from '../../../styles/setings/setings'

export const Facilitystyled = styled.div`
  width: calc(50% - 15px);
  /* width: 300px; */
  background-color: #1e1e1e;

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
    /* max-width: 1080px; */
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
        justify-content: flex-start;
        align-items: center;
        text-align: left;

        ${desktop`
          font-size: 1.2em;
          text-align: left;
        `}
        ${tablet`
          font-size: 1.2em;
          text-align: left;
        `}
        ${mobile`
          font-size: 1.2em;
          justify-content: center;
          text-align: center;
        `}
      }
    }
  }
`
