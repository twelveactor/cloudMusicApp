import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  padding: 30px;
  height: 126px;
  width: 100%;
  background-color: #dbf0f4;

  .h-like {
    color: cornflowerblue;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 0.2rem;
    font-size: .5rem;
    background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
  }


  .btn-like {
    width: 100%;
    height: 38px;
    margin: 0 auto;
    //background-color: chocolate;
    //background-color: #1eb7d2;
    box-shadow: 0 15px 18px -6px rgba(115, 205, 218, 0.9);


    .ant-statistic .ant-statistic-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      user-select: none;
      color: white;
      position: relative;

      .ant-statistic-content-value .ant-statistic-content-value-int{
        color: chocolate;
        -webkit-animation: shining 0.5s alternate infinite;
        animation: shining 0.5s alternate infinite;
      }
    }

    @-webkit-keyframes shining {
      from {
        text-shadow: 0 0 10px #000000, 0 0 20px #182429, 0 0 30px #114353, 0 0 40px #151515, 0 0 50px skyblue, 0 0 60px skyblue;
      }

      to {
        text-shadow: 0 0 5px lightblue, 0 0 10px lightblue, 0 0 15px lightblue, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;
      }
    }


  }
`