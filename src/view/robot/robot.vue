<template>
	<div class="robot">
	<div class="btns_box">
	<Button type="primary" size="large" @click="modalQR">新增</Button>
	</div>
     <Table border :columns="colTable" :data="dataTable">
	 </Table>
	 <Modal v-model="modalDialog">
		<p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>二维码</span>
        </p>
        <div style="text-align:center">
            <img  :src="Imgurl" class="QRImg">
        </div>
        <div slot="footer">
        </div>
    </Modal>
	</div>
</template>
<script>
import { QRcode, RobotLogin, QRCodeLogin } from '@/api/robot'
import axios from 'axios'
export default {
  data () {
    return {
      modalDialog: false,
      Imgurl: '',
      uuid: '',
			    colTable: [
        {
          title: '时间',
          key: 'Time'
        },
        {
				        title: '姓名',
				        key: 'Name'
        },
        {
          title: '二维码',
          slot: 'action',
          width: 250,
          align: 'center'
        }
      ],
      dataTable: [
        {
          QR: '二维码',
          Name: '微信',
          Time: 2019
        }
      ]
    }
  },
  methods: {
    createQRCode () {
      QRcode({}).then(res => {
        this.Imgurl = window.URL.createObjectURL(res.data)
        console.log(this.Imgurl)
        this.uuid = sessionStorage.getItem('uuid');
        this.QRCodeLogin()
      })
    },
    QRCodeLogin () {
      QRCodeLogin(this.uuid).then(res => {
        let resData = res.data.data;
        let code = resData.code
        if (code == 408) {
          this.QRCodeLogin()
        } else if (code == 200) {
          this.RobotLogin(resData.code, resData.hostUrl, resData.redirectUrl, this.uuid)
        } else {
          sessionStorage.setItem('uuid', "");
        }
      })
    },
    RobotLogin (code, hostUrl, redirectUrl, uuid) {
      RobotLogin({code, hostUrl, redirectUrl, uuid}).then(res => {
        let resData = res.data.data;
        if (resData.resultCode == 200) {
          //TODO  这里去刷新机器人
          console.log("微信机器人登陆成功")
        } else {
          console.log("微信机器人登陆失败")
        }
      })
    },
    modalQR () {
      this.modalDialog = true
      this.createQRCode()
    }
  },
  mounted () {
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
