import styled from 'styled-components'
import { formColors, colors } from '../../styles/setings/colors'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'

export const DashboardStyled = styled.div`
  max-width: 100%;
  margin: 0 auto;
  /* margin-top: 10%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 20em; */
  ${desktop`
      // margin-top: 210px;
    `}
  ${tablet`
      // margin-top: 130px;
    `}
    ${mobile`
      // margin-top: 220px;
    `}
  .userData {
    width: 100%;
  }
  .dashboardContainer {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    border-radius: 1em;
    /* background-color: ${formColors.formContainerBackground}; */
    h1 {
      font-size: 1.5em;
      font-weight: bold;
    }

    .adminMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      .menuItem {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80px;
        height: 80px;
        margin: 10px;
        border-radius: 50%;
        background-color: ${formColors.formContainerBackground};
        border: solid #fff 1px;
      }
    }

    ul {
      li {
      }
    }

    article {
    }
  }
`
