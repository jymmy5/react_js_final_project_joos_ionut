import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens';
import { COLORS } from '../../styles/setings/colors';

export const AsideStyled = styled.div`
  h2 {
    padding: 10px 50px 20px 0px;
    margin-left: 15px;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${COLORS.colorTextUnderlineDefault};
    ${desktop`
              font-size: 1.5em;
              `}
    ${tablet`
              font-size: 1.5em;
              `}
            ${mobile`
              margin-left: 0;
              font-size: 1.3em;
              `}
  }

  ul {
    li {
      font-size: 0.8em;
      margin-left: 1.2em;
      margin-top: 0.3em;
      width: calc(100% - 30px);

      a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* background-color: ${COLORS.colorUserBgMenu}; */
        /* border: solid ${COLORS.colorUserBorderMenu} 1px; */
        /* border-radius: 5px; */
        /* padding: 0.5em 0.8em; */
        color: ${COLORS.colorUserTextMenu};
        font-weight: bold;
        padding-left: 10px;

        color: ${COLORS.colorUserActiveTextMenu};
        /* background-color: ${COLORS.colorUserActiveBgMenu}; */
        /* border: solid ${COLORS.colorUserActiveBorderMenu} 1px; */

        &:hover {
          color: ${COLORS.colorUserHovTextMenu};
          background-color: ${COLORS.colorUserHovBgMenu};
          /* border: solid ${COLORS.colorUserHovBorderMenu} 1px; */
        }
        ${desktop`
        align-items: center;
        justify-content: flex-start;    
        width: 100%;
        font-size: 1.5em;
        height: 1.8em;
      `}
      }
    }
  }
`;
