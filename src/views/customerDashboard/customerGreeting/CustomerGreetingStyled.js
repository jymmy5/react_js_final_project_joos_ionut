import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens';

export const CustomerGreetingStyled = styled.section`
  width: 100%;
  margin-bottom: 15px;
  /* background-color: grey; */
  .greetingContainer {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;

    /* ${tablet`
        flex-wrap: wrap;
        flex-direction: column;
      `} */
    ${mobile`
        flex-wrap: wrap;
        flex-direction: column;
      `}

    .customerName {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: row;
      height: 20px;
      width: auto;

      span {
        font-size: 1.1em;
        width: auto;
        /* background-color: grey; */
      }
      h2 {
        margin-left: 5px;
        font-size: 1.3em;
        font-weight: bold;
      }
    }
    .customerCart {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: row;
      height: 20px;
      width: auto;
      margin-left: 15px;
      font-size: 1.1em;
      ${mobile`
        margin-left: 0;
      `}

      h2 {
        margin: 0 5px;
        font-size: 1.3em;
        font-weight: bold;
      }
    }
  }
`;
