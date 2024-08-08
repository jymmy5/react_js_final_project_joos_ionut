import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../styles/setings/mediaScreens'
import { articleTitleH2 } from '../../styles/setings/variables'
import { COLORS } from '../../styles/setings/colors'
// import { alignment } from '../../../styles/setings/setings'

export const AboutStyled = styled.section`
  // margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  padding-bottom: 20px;
  // padding: 20px 0 40px 0;
  background-color: ${COLORS.colorAboutSectionBg};
  ${desktop`
    margin-top: 20px;
  `}
  ${tablet`
    margin-top: 20px;
  `}
${mobile`
    margin-top: 10px;
  `}

  article {
    // margin-top: 25px;
    margin: 15px 25px 25px 25px;
    padding: 0.8em;
    border-radius: 15px;
    max-width: 1300px;
    box-shadow: 0px 5px 7px ${COLORS.colorAboutShadow};
    // border: solid rgb(36, 36, 36) 1px;
    border: solid ${COLORS.colorAboutBorder} 1px;
    background-color: ${COLORS.colorAboutArticleBg};
    color: ${COLORS.colorAboutText};

    /* asa afost */
    /* .row:nth-child(-n + 1) {
      // background-color: #5a5959;
      border-radius: 15px 15px 0 0;
    } */

    /* titlul */
    .row:nth-child(-n + 1) {
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: #000000;
      background-color: ${COLORS.colorAboutTitleBg};
      // border-radius: 15px 15px 0 0;
      padding-left: 15px;
      height: 45px;
      margin-bottom: 15px;
      ${mobile`
        padding-left: 0;
      `}
      ${tablet`
        padding-left: 0;
        `}
    }
  }

  /* pentru grid */
  /* article:nth-child(2n) .container .row:nth-child(2n) {
    display: flex;
    flex-direction: row-reverse;
    background-color: rgb(36, 36, 36);
    border-radius: 0 0 15px 15px;
  } */

  /* nu a fost activ */
  // article:nth-child(2n) {
  //   // background-color: rgb(26, 26, 26);
  // }

  .row:nth-child(-n + 2) img {
    width: 400px;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
    ${mobile`
      float: none;
      margin-right: 0;
      margin-bottom: 15px;
      width: 100%;
    `}
    ${tablet`
      float: none;
      margin-right: 0;
      margin-bottom: 15px;
      width: 100%;
    `}
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: row-reverse;
    // background-color: rgb(36, 36, 36);
    // background-color: rgb(195, 0, 0);
    // border-radius: 0 0 15px 15px;
    // margin-bottom: 10px;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  }

  article:nth-child(2n) .container .row .artText img {
    width: 400px;
    // background-color: rgb(124, 6, 6);
    float: right;
    margin-left: 15px;
    margin-bottom: 15px;
    ${mobile`
      float: none;
      margin-left: 0;
      margin-bottom: 15px;
      width: 100%;
    `}
    ${tablet`
      float: none;
      margin-left: 0;
      margin-bottom: 15px;
      width: 100%;
    `}
  }

  .artTitle {
    text-align: left;
    // padding-left: 15px;
    // height: 90px;
    color: ${COLORS.colorAboutTitle};

    ${mobile`
      text-align: center;
    `}
    ${tablet`
      text-align: center;
    `}
  }

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
    `}
  }
  .artText {
    // letter-spacing: 0.3em;
    padding: 5px 10px 5px 10px;
    line-height: 1.3em;
    letter-spacing: 1px;
    word-spacing: 3px;
    white-space: pre-wrap;
    /* text-indent: 50px; aliniat la 50px */
    ${mobile`
      text-align: justify;
    `}
    img {
      min-width: 300px;
      width: 400px;
      padding: 5px;
      border-radius: 15px;
      border: solid ${COLORS.colorImgBorder} 3px;
      ${mobile`
        // border: solid ${COLORS.colorImgBorder} 3px;
        width: 100%;
      `}
      ${tablet`
        // border: solid ${COLORS.colorImgBorder} 3px;
        width: 100%;
      `}
    }
  }
`
