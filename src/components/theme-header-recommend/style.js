import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  padding: 0 10px 4px 15px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keyword {
      display: flex;
      text-decoration: none;

      .item {
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
    .icon {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      background-position:-235px -164px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -241px;
    }
  }
`