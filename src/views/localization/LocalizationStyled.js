import styled from 'styled-components'
import { COLORS } from '../../styles/setings/colors'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { articleTitleH2 } from '../../styles/setings/variables'

export const LocalizationStyled = styled.section`
  // margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-bottom: 20px; */

  /* background-color: ${COLORS.colorTextUnderlineDefault}; */
  /* background-color: #0b0b0b; */
  /* background-color: ${COLORS.colorAboutShadow}; */

  article {
    width: 100%;
    max-width: 1300px;
    .title {
      display: flex;
      justify-content: left;
      align-items: center;
      /* background-color: #fff; */
      /* padding-left: 15px; */
      height: 45px;
      margin: 20px 0 15px 0;
      ${mobile`
        padding-left: none;
        justify-content: center;
      `}
      ${tablet`
        padding-left: none;
        `}

    h2 {
        ${articleTitleH2};
        /* font-size: 1.5em;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${COLORS.colorAboutUnderline}; */
        margin-left: 15px;
        /* margin-bottom: 15px; */
        ${mobile`
      margin-left: 0px;
      text-align: center;
    `}
      }
    }

    .articleContainer {
      max-width: 1300px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      /* width: calc(100% - 100px); */
      /* box-shadow: 0px 5px 7px ${COLORS.colorAboutShadow}; */
      /* // border: solid rgb(36, 36, 36) 1px; */
      /* border: solid ${COLORS.colorAboutBorder} 1px; */
      /* background-color: ${COLORS.colorAboutArticleBg}; */
      /* background-color: #ccc; */
      /* color: ${COLORS.colorAboutText}; */
      ${mobile`
    flex-direction: column-reverse;
    `}

      .map {
        width: calc(50% - 15px);
        ${mobile`
        width: 100%;
      `}
      }
      .description {
        width: calc(50% - 15px);
        ${mobile`
        margin-bottom: 15px;
        width: 100%;
      `}
      }
    }
  }
`
