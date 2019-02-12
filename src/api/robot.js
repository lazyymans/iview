import axios from '@/libs/api.request'

/**
 * 生成登陆二维码
 * @returns {*|void|AxiosPromise<any>}
 * @constructor
 */
export const createLoginQRCode = () => {
  return axios.request({
    url: '/robot/wechat/login/createLoginQRCode',
    method: 'get',
    responseType: 'blob'
  })
}

/**
 * 检验扫码登陆
 * @param uuid
 * @returns {*|void|AxiosPromise<any>}
 * @constructor
 */
export const checkScanQRCodeLogin = (uuid) => {
  const data = uuid
  return axios.request({
    url: '/robot/wechat/login/checkScanQRCodeLogin',
    headers: {
      'uuid': data
    },
    method: 'get'
  })
}

/**
 * 微信网页版登陆
 * @param code
 * @param hostUrl
 * @param redirectUrl
 * @param uuid
 * @returns {*|void|AxiosPromise<any>}
 * @constructor
 */
export const wechatRobotLogin = ({code, hostUrl, redirectUrl, uuid}) => {
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

// /wechat/robot/user

/**
 * 列出微信用户
 * @returns {*|void|AxiosPromise<any>}
 */
export const listWechatRobotUser = ({}) => {
  const data = {
  }
  return axios.request({
    url: '/robot/wechat/robot/user/listWechatRobotUser',
    data,
    method: 'post'
  })
}
