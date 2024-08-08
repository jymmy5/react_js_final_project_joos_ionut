import styled from 'styled-components';

export const SuccesAlertStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Changed from relative to fixed */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00000090;
  color: #fff;
  z-index: 1000;
  .successMsg {
    background-color: #039e1f;
    padding: 30px;
  }
`;
// export const ErrorAlertStyled = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed; /* Changed from relative to fixed */
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: #00000090;
//   color: #fff;
//   z-index: 1000;
//   .errorMsg {
//     margin-top: 30px;
//     background-color: #f00;
//     padding: 30px;
//     height: auto;
//   }
// `;

// export const SuccesAlertStyled = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: #00000090;
//   color: #fff;
//   z-index: 1000;
//   .successMsg {
//     background-color: #039e1f;
//     padding: 30px;
//   }
// `;import styled from 'styled-components';

export const ErrorAlertStyled = styled.div`
  display: flex;
  flex-direction: column; /* Stack error messages vertically */
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Slightly transparent background */
  color: #fff;
  z-index: 1000;
  overflow-y: auto; /* Allow scrolling if there are many errors */

  .errorMsg {
    margin: 10px; /* Space between error messages */
    background-color: #f00;
    padding: 15px;
    border-radius: 5px; /* Optional: rounded corners */
    width: 80%; /* Adjust width as needed */
    max-width: 500px; /* Max width for better readability */
    text-align: center; /* Center text */
  }
`;
