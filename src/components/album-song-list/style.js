import styled from 'styled-components'

export const AlbumSongListWrapper = styled.div`
  padding: 50px;
  background-color: #ffffff;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
`

export const TopInfoWrapper = styled.div`

  .top-tag-info {
    display: flex;
    position: relative;

    .singer-cover {
      .image-position {
        width: 210px;
        background-position: 0 -985px;
      }
    }

    .singer-info {
      flex: 1;
      margin-left: 60px;
      margin-top: 10px;

      .type-name {
        display: flex;
        width: 100%;
        height: 30px;
        line-height: 30px;

        .type-icon {
          width: 54px;
          height: 30px;
          background-position: 0 -182px;
        }

        .name {
          flex: 1;
          line-height: 30px;
          margin-left: 10px;
          font-size: 22px;
        }
      }

      .publish-info {
        .p-info {
          margin-top: 10px;
          color: #666;
        }
      }

      .btn-player {
        margin-top: 15px;
        position: relative;

        .btn-bg {
          width: 66px;
          height: 32px;
          background-position: 0 -191px;
        }

        p {
          position: absolute;
          color: cornsilk;
          left: 28px;
          top: 7px;
        }

        .btn-bg:hover {
          background-position: -70px -191px;
        }
      }
    }
  }

  .album-description {
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis; /* 超出显示为省略号 */
    display: -webkit-box; /* 将元素作为弹性伸缩盒子模型显示 */
    -webkit-line-clamp: 6; /* 用来限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */

    .font-description {
      font-size: 12px;
      font-weight: bold;
    }

    .line-text {
      color: #666;
      text-indent: 2em;
      line-height: 30px;
    }
  }

  .show-put-click {
    margin-top: 10px;
    text-align: right;
    cursor: pointer;
    color: #03a4d5;
  }
`

export const AlbumListWrapper = styled.div`
  margin-top: 10px;

  .ant-table-wrapper {
    border-top: 2px solid #910000;

    .ant-table .ant-table-thead {
      font-size: 12px;
    }

    .ant-table .ant-table-tbody .ant-table-row {
      //background-color: #F7F7F7;
      font-size: 12px;
      
      .index-info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        span {
          width: 20px;
          height: 20px;
          display: inline-block;
          line-height: 26.8px;
        }
        
        .index-icon {
          width: 20px;
          height: 20px;
          display: inline-block;
          //background-position: -1px -85px;
          background-position:${props => props.x + 'px'} ${props => props.y + 'px'};
        }
        .index-icon:hover {
          background-position: 0px -125px;
        }
        
        .icon-active{
          background-position: -20px -125px;
        }

      }
    }
    
    .song-title{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      
      .title-name{
        width: 27px;
        height: 20px;
        display: inline-block;
        background-position: 2px -151px;
      }
    }
  }
`