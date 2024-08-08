import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'

export const StartShortFacilitys = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: auto;
  // padding: 20px 0 40px;
  padding: 20px 10px;
  background-color: #0b0b0b;

  ${desktop`
    margin-top: 0px;
    `}
  ${tablet`
    margin-top: 0px;
    `}
${mobile`
    margin-top: 0px;
    `}
  ul {
    // display: grid;
    // grid-auto-flow: column;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1080px;
    // @include desktop {
    //   grid-template-rows: repeat(5, min-content);
    // }
    // @include tablet {
    //   grid-template-rows: repeat(5, min-content);
    // }
    ${mobile`
      display: block;
      `}
    .container .row .fac-li {
      height: auto;
      justify-self: center;
      align-items: center;
      padding: 10px;
      ${desktop`
        width: 220px;
      `}
      ${tablet`
        width: 220px;
      `}
     ${mobile`
        width: 100%;
      `}

      li {
        font-size: 1.2em;
        // margin: 5px 15px;
        text-align: center;

        ${desktop`
          font-size: 1em;
        `}
        ${tablet`
          font-size: 1em;
        `}
     ${mobile`
          font-size: 1em;
        `}
      }
    }
  }
`
