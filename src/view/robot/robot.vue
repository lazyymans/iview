<template>
	<div class="robot">
	<div class="btns_box">
	<Button type="primary" size="large" @click="modalQR">添加机器人</Button>
	</div>
     <Table border :columns="colTable" :data="dataTable">
	 </Table>
	 <Modal v-model="modalDialog">
      <div slot="header" style="color:#f60;text-align:center">
          <Icon type="information-circled"></Icon>
          <span>二维码</span>
      </div>
      <div style="text-align:center">
          <img  :src="Imgurl" class="QRImg">
      </div>
      <div slot="footer" style="color:#f60;text-align:center">
        <Button type="primary" @click="confirmWechatRobotLogin">扫码后，确认登陆</Button>
      </div>
    </Modal>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
import Render from '@/common/render';
export default {
  data () {
    return {
      modalDialog: false,
      Imgurl: '',
      uuid: '',
      that: this,
      colTable: [
        { title: '用户昵称', key: 'nickname', align: 'center' },
        { title: '用户性别', key: 'sex', align: 'center' },
        { title: '个性签名', key: 'signature', align: 'center' },
        { title: '平台创建时间', key: 'createTime', align: 'center' },
      ],
      dataTable: []
    }
  },
  methods: {
    ...mapActions([
      'createQRCode',
      'robotUserList',
    ]),
    QRCode () {
      this.createQRCode()
      this.Imgurl = window.URL.createObjectURL(this.$store.state.robot.QRCodeImgRes.data)
      this.uuid = sessionStorage.getItem('uuid');
    },
    confirmWechatRobotLogin () {
      /*QRCodeLogin(this.uuid).then(res => {
        let resData = res.data.data;
        let code = resData.code
        if (code == 408) {
          this.$Message.info('408 等待扫描二维码');
          this.QRCodeLogin()
        } else if (code == 200) {
          this.$Message.info('登陆成功');
          this.RobotLogin(resData.code, resData.hostUrl, resData.redirectUrl, this.uuid)
          this.modalDialog = false
        } else if (code == 400)  {
          this.$Message.info('二维码超时 400');
          sessionStorage.setItem('uuid', "")
          this.createQRCode()
        } else if (code == 201)  {
          this.$Message.info('在手机上点击确认');
        }
      })*/
    },
    RobotLogin (code, hostUrl, redirectUrl, uuid) {
      /*RobotLogin({code, hostUrl, redirectUrl, uuid}).then(res => {
        let resData = res.data.data;
        if (resData.resultCode == 200) {
          //TODO  这里去刷新机器人
          console.log("微信机器人登陆成功")
        } else {
          console.log("微信机器人登陆失败")
        }
      })*/
    },
    listWechatRobotUser (){
      this.robotUserList()
      this.dataTable = this.$store.state.robot.robotList
    },
    modalQR () {
      this.modalDialog = true
      this.QRCode()
    }
  },
  mounted () {
    this.listWechatRobotUser()
  }
}
</script>

<style lang="less">
.robot{
	.btns_box{
		margin-bottom: 10px;
	}
}
.QRImg{
		width: 300px;
		display: block;
		margin: 0px auto;
}
</style>
