import axios from '@/libs/api.request'

export const QRcode = ({}) => {
  const data = {

  }
  return axios.request({
    url: '/robot/wechat/login/createLoginQRCode',
    data,
    method: 'get',
    responseType: 'blob'
  })
}

export const QRCodeLogin = (uuid) => {
  const data = uuid
  return axios.request({
    url: '/robot/wechat/login/checkScanQRCodeLogin',
    headers: {
      'uuid': data
    },
    method: 'get'
  })
}

export const RobotLogin = ({code, hostUrl, redirectUrl, uuid}) => {
  const data = {
    code,
    hostUrl,
    redirectUrl
  }
  return axios.request({
    url: '/robot/wechat/login/wechatRobotLogin',
    headers: {
      'uuid': uuid
    },
    data,
    method: 'put'
  })
}
