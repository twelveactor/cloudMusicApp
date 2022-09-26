import styled from 'styled-components'

export const MineWrapper = styled.div`
  //margin-top: 75px;
  //margin-bottom: 111px;
  height: ${props => (props.height - 75 - 172) + 'px'};
  position: relative;
    //background: url(${require('@/assets/img/empty-bg.jpg')}) repeat;

  .position-empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .ant-empty .ant-empty-description .font-empty {
      font-size: 12px;
      color: #717171;
    }
  }

`