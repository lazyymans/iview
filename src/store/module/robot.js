import { QRcode, listWechatRobotUser, QRCodeLogin, RobotLogin } from '@/api/robot'

export default {
  state: {
    robotList: [],
    QRCodeImgRes: {},
    checkLoginRes: {},
    robotLoginRes: {}
  },
  mutations: {
    setRobotList (state, robotList) {
      state.robotList = robotList
    },
    setQRCodeImgRes (state, res) {
      state.QRCodeImgRes = res
    },
    setCheckScanQRCodeLoginRes (state, res) {
      state.checkLoginRes = res
    },
    setRobotLoginRes (state, res) {
      state.robotLoginRes = res
    }
  },
  actions: {
    /**
     * 生成二维码
     * @param commit
     * @returns {Promise<any>}
     * @constructor
     */
    createQRCode ({ commit },) {
      return new Promise((resolve, reject) => {
        QRcode().then(res => {
          commit('setQRCodeImgRes', res)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    /**
     * 扫码登陆校验
     * @param commit
     * @param uuid
     * @returns {Promise<any>}
     */
    checkScanQRCodeLogin({ commit }, {uuid}) {
      return new Promise((resolve, reject) => {
        QRCodeLogin(uuid).then(res => {
          commit('setCheckScanQRCodeLoginRes', res)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    /**
     * 微信机器人登陆
     * @param commit
     * @param code
     * @param hostUrl
     * @param redirectUrl
     * @param uuid
     * @returns {Promise<any>}
     * @constructor
     */
    wechatRobotLogin({ commit }, {code, hostUrl, redirectUrl, uuid}) {
      return new Promise((resolve, reject) => {
        RobotLogin({code, hostUrl, redirectUrl, uuid}).then(res => {
          commit('setRobotLoginRes', res)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },



    robotUserList({ commit }) {
      return new Promise((resolve, reject) => {
        listWechatRobotUser(
          {}
        ).then(res => {
          commit('setRobotList', res.data.data)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },





  }
}
