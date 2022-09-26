import styled from 'styled-components'

export const PlayerListPanelWrapper = styled.div`
  width: 980px;
  //height: 100px;
  //background-color: chocolate;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: 0 auto;
  z-index: 5;

  .player-header {
    height: 40px;
    background-position: 0 -6px;
    background-repeat: repeat;
    position: relative;

    .title-number {
      color: #ffffff;
      font-weight: bolder;
      position: absolute;
      top: 10px;
      left: 30px;
    }

    .song-name {
      color: #ffffff;
      font-weight: bolder;
      position: absolute;
      top: 10px;
      right: 200px;
    }
  }

  .player-content {
    height: 260px;
    display: flex;
    justify-content: space-between;
    background-image: url(${props => props.picUrl});
    background-size: 300px;
    background-clip: border-box;
    
    .player-content-left {
      width: 49.5%;
      background-color: #000000;
      opacity: .8;

      .pre-row-song {
        display: flex;
        height: 28px;

        .pre-row-song-name {
          flex: 1;
          line-height: 28px;
          padding-left: 20px;
          color: #CCCCCC;
        }

        .pre-row-song-name:hover {
          color: #ffffff;
        }

        .pre-row-song-singer-time {
          width: 150px;
          display: flex;

          a {
            display: block;
            width: 80px;
            overflow: hidden;
            text-overflow: ellipsis; /* 超出显示为省略号 */
            justify-content: center;
            line-height: 28px;
            color: #797877;
          }

          span {
            display: block;
            width: 70px;
            text-align: center;
            line-height: 28px;
            color: #797877;
          }
        }
      }
    }

    .cut-off {
      flex: 1;
      background-color: #040404;
    }

    .player-content-right {
      width: 49.5%;
      background-color: #000000;
      opacity: .8;
      height:260px;
      
      .scroll-content{
        height: 100%;
        width: 100%;
        overflow-y: scroll;

        
        .song-list {
          width: 100%;
          color: #CCCCCC;
          text-align: center;
          line-height: 40px;
          animation:bear 3s forwards;
          
        }
        .active {
          color: #ffffff;
          text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red; //设置发光效果
        }
      }
    }
   


    /*滚动条整体宽度*/
    .scroll-content::-webkit-scrollbar {
      width: 5px; /*宽对应滚动条的尺寸*/
    }
    /*轨道*/
    .scroll-content::-webkit-scrollbar-track {
      background: #3a3a3a;
    }
    /*滑块*/
    .scroll-content::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #797877;
    }
  }
`