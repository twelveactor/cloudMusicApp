import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  height: 126px;
  position: relative;
  background-position: -1px 0;
  padding: 20px;

  .user-login-bg {
    height: 100%;
    display: flex;
    flex-direction: column;
    //flex-flow: column; //垂直排列
    justify-content: space-between; //两端对齐

    .login-text {
      display: block;
      width: 205px;
      margin: 0 auto;
    }

    .login-btn {
      color: white;
      display: block;
      width: 100px;
      height: 31px;
      margin: 0 auto;
      text-align: center;
      line-height: 31px;
      background-position: -1px 195px;
      //background-color: #D61319;
      background: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);
      border-radius: 5px;
      box-shadow: 0 0 20px #eee;
      background-size: 200% auto;
      transition: 0.5s;
    }
    .login-btn:hover {
         background-position: right center; /* change the direction of the change here */
         color: #fff;
         text-decoration: none;
       }
  }
`

//   .btn-grad {
//
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }
//
// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }
