import styled from 'styled-components';
import { mobile } from '../../styles/setings/mediaScreens';

// export const AddToCartLocalStorageStyled = styled.div`
export const AddToCartMultipleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  /* color: white; */
  padding: 10px 0;
  /* background-color: #fff; */
  ${mobile`
  margin-top: 15px;
  justify-content: center;`}

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: grey; */
    /* border-radius: 0 0 15px 15px; */
    /* Chrome, Safari, Edge, Opera */
    /* Firefox */
    .inputData {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 10px 0;
      input {
        display: block;
        text-align: center; /* Center the text */
        font-size: 1.3em;
        font-weight: bold;
        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      .increase {
        height: 40px;
        width: 40px;
        border-radius: 0 20px 20px 0;
        border: transparent;
        margin-left: 3px;
        padding-right: 10px;
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #ccc;
        }
      }
      .decrease {
        height: 40px;
        width: 40px;
        border-radius: 20px 0 0 20px;
        border: transparent;
        margin-right: 3px;
        padding-left: 10px;
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #ccc;
        }
      }

      .quantityInput {
        height: 40px;
        width: 40px;
        border: transparent;
      }
      .quantitySelect {
        height: 30px;
        width: 80px;
        border-radius: 5px;
      }
    }

    .addToCart {
      height: 40px;
      /* margin-left: 20px; */
      border-radius: 40px;
      font-size: 1.1em;
      font-weight: bold;
      padding: 12px 40px;
      border: transparent;
      text-transform: uppercase;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
      }
      /* ${mobile`
      margin-left: 50px`} */
    }
  }
`;

export const AddToCartSingleStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  /* color: white; */
  padding: 10px 0;
  ${mobile`
  margin-top: 15px;
  justify-content: center;`}

  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: grey; */
    /* border-radius: 0 0 15px 15px; */
    /* Chrome, Safari, Edge, Opera */
    /* Firefox */
    .inputData {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 10px 0;
      input {
        display: block;
        text-align: center; /* Center the text */
        font-size: 1.3em;
        font-weight: bold;
        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      .increase {
        height: 40px;
        width: 40px;
        border-radius: 0 20px 20px 0;
        border: transparent;
        margin-left: 3px;
        padding-right: 10px;
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #ccc;
        }
      }
      .decrease {
        height: 40px;
        width: 40px;
        border-radius: 20px 0 0 20px;
        border: transparent;
        margin-right: 3px;
        padding-left: 10px;
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #ccc;
        }
      }

      .quantityInput {
        height: 40px;
        width: 40px;
        border: transparent;
      }
      .quantitySelect {
        height: 30px;
        width: 80px;
        border-radius: 5px;
      }
    }

    .addToCart {
      height: 40px;
      margin-left: 20px;
      border-radius: 40px;
      font-size: 1.1em;
      font-weight: bold;
      padding: 12px 40px;
      border: transparent;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
      }
      /* ${mobile`
      margin-left: 50px`} */
    }
  }
`;
