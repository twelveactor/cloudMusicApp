import styled from 'styled-components'


export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;
  overflow: hidden;
  
  // header 栏
  .header-context{
    height: 70px;
    
    display: flex;
    justify-content: space-between;
  }
  
  // header 下划分割线
  .header-underline{
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft=styled.div`
  display: flex;
  color: #fff;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    // 网易云文字 跑到页面看不到的地方
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      // 结构伪类
      // <NavLink to={item.link}>
      //     {item.title}
      //     <i className="sprite_01 icon" />
      //  </NavLink>
      // 为最后一个元素 添加 伪类 属性
      :last-of-type a {
        position: relative;
        
        // 伪元素， 都必须有 content: "";
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      // 图标大小
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight=styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;


  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 75px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
    //font-size: 12px;
    //color: #ccc;
  }
`