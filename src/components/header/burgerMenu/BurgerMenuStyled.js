import styled from 'styled-components'
import { desktop, tablet, mobile } from '../../../styles/setings/mediaScreens'
import { COLORS } from '../../../styles/setings/colors'

export const BurgerMenuStyled = styled.div`
  /* BurgerMenuStyled.css or BurgerMenuStyled.js for styled-components */
  /* .burger-menu {
    position: relative;
  } */
  margin: 1.5em 1.5em 0 0;

  ${desktop`
    display: none;
  `}
  .burger-icon {
    /* width: 30px; */
    /* border: solid #fff 1px; */
    position: absolute;
    right: 1em;
    top: 1em;
    width: 2.1em;
    height: 2.1em;
    cursor: pointer;

    display: block;
  }

  .bar {
    width: 100%;
    /* display: block; */
    background-color: ${COLORS.colorBurgerMenuLogo};
    height: 3px;
    margin-bottom: 4px;
    width: 2em;
    border-radius: 2px;
  }

  .burger-icon.open .bar:nth-child(1) {
    transform: translateY(14px) rotate(45deg);
  }

  .burger-icon.open .bar:nth-child(2) {
    opacity: 0;
  }

  .burger-icon.open .bar:nth-child(3) {
    transform: translateY(0px) rotate(-45deg);
  }

  .menu {
    display: block;
    position: absolute;
    left: 0;
    /* border: solid #fff 1px; */
    background-color: ${COLORS.colorBurgerBgMenu};
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    transform: translateX(-100%);
    transition: transform 0.5s;
    ${desktop`
              top: 0;
              `}
    ${tablet`
              top: 120px;
              `}
            ${mobile`
              top: 180px;
              `}
  }

  .menu.open {
    display: block;
    position: absolute;
    transform: translateX(0);
    width: calc(100% - 20px);
    left: 10px;
    background-color: ${COLORS.colorBurgerBgMenu};
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    padding: 0.2em 0 0.2em 0.2em;
    line-height: 1.5em;
    /* padding: 10px; */
    /* border-bottom: 1px solid #ddd; */
  }

  .menu li a {
    display: inline-block;
    margin: 0 1em;
    padding: 0.3em 1em;
    color: ${COLORS.colorButTexHeaderMenu};
    letter-spacing: 3.28px;
    font-weight: bold;
    font-size: 1em;
    width: calc(100% - 30px);
    &:hover {
      background-color: ${COLORS.colorBurgerHovBgMenu};
      color: ${COLORS.colorBurgerHovTextMenu};
    }

    &.active {
      color: ${COLORS.colorBurgerActiveTextMenu};
    }
  }
`
