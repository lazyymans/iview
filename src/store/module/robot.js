import { QRcode, listWechatRobotUser } from '@/api/robot'

export default {
  state: {
    robotList: [],
    QRCodeImgRes: {}
  },
  mutations: {
    setRobotList (state, robotList) {
      state.robotList = robotList
    },
    setQRCodeImgRes (state, res) {
      state.QRCodeImgRes = res
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
