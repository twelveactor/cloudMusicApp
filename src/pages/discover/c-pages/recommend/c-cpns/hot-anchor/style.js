import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  height: 300px;
  margin: 0;
  padding: 0;
  background: #fff6e3;
  display: flex;
  align-items: center;
  justify-content: center;
  .main {
    position: relative;
  }

  .dragon {
    width: 200px;
    height: 140px;
    transform-origin: 50% 80%;
    animation: zoomIn .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
  }

  .dragon .body {
    position: absolute;
    top: 0;
    right: 0;
    width: 180px;
    height: 128px;
    //background: url(./img/body.png) no-repeat center center;
    background: url(${require('@/assets/img/dragon/body.png')}) no-repeat center center;
    background-size: contain;
    z-index: 10;
  }

  .dragon .horn-left {
    position: absolute;
    top: -17px;
    left: 32px;
    width: 31px;
    height: 31px;
    //background: url(./img/horn-left.png) no-repeat;
    background: url(${require('@/assets/img/dragon/horn-left.png')}) no-repeat;
    background-size: contain;
    z-index: 9;
    transform-origin: 150% 200%;
    transform: rotate(-5deg);
    animation: swingRight .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
  }

  .dragon .horn-right {
    position: absolute;
    top: -16px;
    left: 110px;
    width: 34px;
    height: 31px;
    //background: url(./img/horn-right.png) no-repeat;
    background: url(${require('@/assets/img/dragon/horn-right.png')}) no-repeat;
    background-size: contain;
    z-index: 9;
    transform-origin: -50% 200%;
    transform: rotate(5deg);
    animation: swingLeft .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
  }

  .dragon .eye {
    position: absolute;
    top: 39px;
    width: 11px;
    height: 11px;
    //background: url(./img/eye.png) no-repeat;
    background: url(${require('@/assets/img/dragon/eye.png')}) no-repeat;
    background-size: contain;
    z-index: 12;
  }

  .dragon .eye.left {
    left: 49px;
  }

  .dragon .eye.right {
    left: 118px;
    transform-origin: 50% 50%;
    transform: rotate(180deg);
  }

  .dragon .blush {
    position: absolute;
    top: 46px;
    width: 15px;
    height: 9px;
    //background: url(./img/blush.png) no-repeat;
    background: url(${require('@/assets/img/dragon/blush.png')}) no-repeat;
    background-size: 100% 100%;
    z-index: 11;
    animation: blush .5s ease infinite alternate;
  }

  .dragon .blush.left {
    left: 43px;
  }

  .dragon .blush.right {
    left: 120px;
  }

  .dragon .mouth {
    position: absolute;
    top: 52px;
    left: 49px;
    width: 78px;
    height: 56px;
    //background: url(./img/mouth.png) no-repeat;
    background: url(${require('@/assets/img/dragon/mouth.png')}) no-repeat;
    background-size: 100%;
    z-index: 11;
    animation: openMouth 1s ease infinite;
  }

  .dragon .tail-sting {
    position: absolute;
    top: 67px;
    left: 139px;
    width: 40px;
    height: 38px;
    //background: url(./img/tail-sting.png) no-repeat;
    background: url(${require('@/assets/img/dragon/tail-sting.png')}) no-repeat;
    background-size: contain;
    z-index: 9;
    transform-origin: 0 100%;
    animation: tailUp .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
  }

  .shadow-wrapper {
    position: absolute;
    top: 110px;
    width: 100%;
  }

  .shadow {
    margin: 0 auto;
    width: 110px;
    height: 30px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    z-index: 0;
    animation: zoomIn .5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
  }

  .fire-wrapper {
    position: absolute;
    width: 40px;
    top: 60px;
    left: 88px;
    transform: translate(-50%, -50%);
    transform-origin: 50% 100%;
    animation: fireUp 1s ease-in infinite;
  }

  .fire {
    padding-bottom: 135%;
    width: 100%;
    height: 100%;
    //background: url(./img/fire.png) no-repeat;
    background: url(${require('@/assets/img/dragon/fire.png')}) no-repeat;
    background-size: contain;
    animation: fire 1s ease-out infinite;
  }

  .progress {
    margin-top: 30px;
    width: 100%;
  }

  .progress .outer {
    width: 100%;
    height: 14px;
    border-radius: 7px;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .progress .inner {
    width: 0;
    height: 100%;
    background: #ffcd33;
    animation: loading 2s linear infinite;
  }

  @keyframes zoomIn {
    100% {
      transform: scale(1.16, 1.16);
    }
  }

  @keyframes swingRight {
    100% {
      transform: rotate(5deg);
    }
  }

  @keyframes swingLeft {
    100% {
      transform: rotate(-5deg);
    }
  }

  @keyframes blush {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes openMouth {
    0% {
      -webkit-clip-path: ellipse(20% 0% at 50% 0);
      clip-path: ellipse(20% 0% at 50% 0);
    }

    50% {
      -webkit-clip-path: ellipse(100% 100% at 50% 0);
      clip-path: ellipse(100% 100% at 50% 0);
    }

    70% {
      -webkit-clip-path: ellipse(100% 100% at 50% 0);
      clip-path: ellipse(100% 100% at 50% 0);
    }

    100% {
      -webkit-clip-path: ellipse(20% 0% at 50% 0);
      clip-path: ellipse(20% 0% at 50% 0);
    }
  }

  @keyframes tailUp {
    0% {
      transform: scaleY(0.9);
    }

    100% {
      transform: scaleY(1.06);
    }
  }

  @keyframes loading {
    100% {
      width: 100%;
    }
  }

  @keyframes fireUp {
    0% {
      top: 70px;
    }

    20% {
      top: 70px;
    }

    100% {
      top: -80px;
    }
  }

  @keyframes fire {
    0% {
      transform: scale(0, 0);
      opacity: 0.8;
    }

    20% {
      transform: scale(0, 0);
      opacity: 0.8;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      transform: scale(1, 1);
      opacity: 0;
    }
  }
`