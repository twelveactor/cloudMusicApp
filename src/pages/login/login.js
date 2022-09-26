import React, { useState} from "react";
import {Button, Modal} from "antd";
import {memo, useEffect} from "react";


import {
  getLogin,
  createLogin,
  checkLogin
}from '@/network/login'

export default memo(function MCLogin(props) {

    const {loginModalOpen,sign} = props

    const [isModalOpen, setIsModalOpen] = useState(false);


    const [keys, setKeys] = useState('')

    const [loginUrl, setLoginUrl] = useState('')
    const [timeStamps,setTimeStamps] = useState('')

    const [checkCode,setCheckCode] = useState(0)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [cookies, setCookies] = useState('')

    // const [loginOutBtn,setLoginOutBtn] = useState()

    // const [loginState,setLoginState] = useState({})

    useEffect( ()=>{
      setIsModalOpen(sign)

      if (isModalOpen){
        loginCheck()
      }
    },[sign,isModalOpen,keys])

  let begin = ''
    useEffect(()=>{

      if ( loginUrl){
        begin = window.setInterval(()=>{
          checkLoginMessage(keys)
        },3000)
      }else if (checkCode === 803 && loginUrl){
        console.log(checkCode,loadingMessage)
        clearInterval(begin)
      }

      return () =>{
        clearInterval(begin)
      }
    },[loginUrl,checkCode])


  // key
  const loginKey = async () =>{
    const res = await getLogin()
    const timeStamp = new Date().valueOf()
    if (res.data.code !== 200) {
      return console.log('获取 key 失败！')
    }
    setKeys(res.data.unikey)
    setTimeStamps(timeStamp)
  }

  // createKey
  const createLoginImg =async (key,base64Time) => {
    const res = await createLogin(key, base64Time)
    if (res.code !== 200){
        return console.log('createLogin 错误')
      }
    const {data} = res
    setLoginUrl(data.qrimg)
    console.log(loginUrl)
  }

  // checkLogin
  const checkLoginMessage = async (key) =>{
    let res = await checkLogin(key)
    setCheckCode(res.code)
    console.log(checkCode,loadingMessage)
    console.log(localStorage.getItem('cookie'))

    switch (res.code){
      case 801:
          setLoadingMessage(res.message)
        break
      case 802:
        setLoadingMessage(res.message)
        break
      case 803:
        setLoadingMessage(res.message)
        setCookies(res.cookie)
        localStorage.setItem('cookie',res.cookie)
        break
      default:
        setLoadingMessage(res.message)
    }

    // 轮询此接口可获取二维码扫码状态,800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
  // if (res.code === 801){
  //     setCheckCode(801)
  //     setLoadingMessage(res.message)
  //     console.log(res.message)
  //   }else if (res.code === 802){
  //   setCheckCode(802)
  //     setLoadingMessage(res.message)
  //     console.log(res.message)
  //   }else if (res.code === 803){
  //   setCheckCode(803)
  //     setLoadingMessage(res.message)
  //     console.log(res.message)
  //     setCookies(res.cookie)
  //   }else{
  //     setCheckCode(0)
  //     setLoadingMessage(res.message)
  //     console.log(res.message)
  //   }

  }

    const loginCheck = async () => {
      console.log('正在获取登录 key...')
      // 1、获取 key
      await loginKey()

      console.log('正在获取二维码链接...')
      // 2、创建登录图片
      await createLoginImg(keys,timeStamps)

      console.log('正在检查登录状态...')
      // 3、核查图片
      // window.setInterval(()=>{
      //   checkLoginMessage(keys)
      // },2000)
      // await checkLoginMessage(keys)

    }

    // 全部归零
  const deleteLoginData = () => {
    setKeys('')
    setLoginUrl('')
    setTimeStamps('')
  }

    const handleOk = () => {
      setIsModalOpen(false);
      loginModalOpen(false)
      clearInterval(begin)
      deleteLoginData()
    };

    const handleCancel = () => {
      setIsModalOpen(false);
      loginModalOpen(false)
      clearInterval(begin)
      deleteLoginData()
    };


    // const loginOutClick = async () => {
    //   const src = await loginOut()
    //   console.log(src.code) // code:200
    //   setLoginOutBtn(src.code)
    // }
    return (
      <div>
        {/*<Button onClick={loginOutClick}>*/}
        {/*  退出登录*/}
        {/*</Button>*/}
        <Modal title="网易云登录" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {/*<Image src={loginUrl} />*/}
          <img src={loginUrl} alt=" "/>
          <Button type="primary" size="small" loading>
            {loadingMessage}
          </Button>
          <p>{cookies}</p>
        </Modal>
      </div>
    );
  }
)