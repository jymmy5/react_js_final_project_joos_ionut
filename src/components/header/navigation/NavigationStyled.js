import styled from 'styled-components';
import { COLORS } from '../../../styles/setings/colors';
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens';

export const NavigationStyled = styled.nav`
  ${tablet`
      display: none;
      `}
  .headerNav {
    .headerButtons {
      background-color: ${COLORS.colorButBgHeaderMenu};

      ${desktop`
          height: 60px;
          box-shadow: 0px 5px 7px #989898;
          `}
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;

        li {
          width: auto;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${COLORS.colorButBgHeaderMenu};
            color: ${COLORS.colorButTexHeaderMenu};
            border: solid ${COLORS.colorButBorderHeaderMenu} 1px;
            height: 60px;
            // margin: 0 1px;
            padding: 10px 15px;
            font-size: 1em;
            font-weight: bold;

            i {
              display: block;
              font-size: 2em;
            }
            span {
              font-size: 1em;
            }
            &.active {
              color: ${COLORS.colorButActiveTextHeaderMenu};
              border: solid ${COLORS.colorButActiveBorderHeaderMenu} 1px;
              border-radius: 5px;
              background-color: ${COLORS.colorButActiveBgHeaderMenu};
            }
            &:hover {
              color: ${COLORS.colorButHovTextHeaderMenu};
              background-color: ${COLORS.colorButHovBgHeaderMenu};
              border: solid ${COLORS.colorButHovBorderHeaderMenu} 1px;
            }
          }
        }
      }
    }
  }
`;
