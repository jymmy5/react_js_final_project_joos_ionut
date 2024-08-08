import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { articleTitleH2 } from '../../styles/setings/variables'
import { COLORS } from '../../styles/setings/colors'
// import { alignment } from '../../../styles/setings/setings'

export const DeliveryPricesStyled = styled.ul`
  margin: 20px 15px;
  margin-left: 15px;
  /* border: solid #fff 1px; */
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  justify-content: flex-start;
  align-items: center;
  ${mobile`
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  `}
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    margin: 10px 5px;
    padding: 20px 15px;
    /* border: solid #fff 1px; */
    border-radius: 5px;
    background-color: #161616;
    box-shadow: 3px 5px 7px ${COLORS.colorAboutShadow};
    font-size: 1.1em;

    ${mobile`
      // flex-direction: column;
      // margin-top: 20px;
      width: 100%;
    `}
    span {
      font-size: 1.2em;
      font-weight: bold;
    }
  }
`
