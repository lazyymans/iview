<style scoped>
  @import './home.less';
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu :mode="modeType" theme="dark" width="auto" :active-name="this.$route.path" :open-names="openNames" @on-select="menuSelect" accordion>
        <div class="layout-logo-left">
          <Icon type="paper-airplane"></Icon>
          <span class="layout-text">博客管理后台</span>
        </div>
        <template v-for="(item) in $router.options.routes[1].children" v-if="!item.hideInMenu">
          <Submenu :name="item.name" v-bind="" v-if="!item.meta.leaf">
            <template slot="title">
              <Icon :type="item.meta.icon"></Icon>
              <span class="layout-text">{{item.meta.title}}</span>
            </template>
            <template v-for="(child) in item.children">
              <Menu-item :name="child.path" v-bind="">{{item.meta.title}}</Menu-item>
            </template>
          </Submenu>
          <template v-if="item.meta.leaf">
            <Menu-item :name="item.path" v-bind="">
              <Icon :type="item.meta.icon"></Icon>
              <span class="layout-text">{{item.meta.title}}</span>
            </Menu-item>
          </template>
        </template>
      </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon-round"></Icon>
        </Button>
      </div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb-item href="#">首页</Breadcrumb-item>
          <Breadcrumb-item>{{$route.meta.title}}</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <router-view/>
        </div>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      openNames: [this.$route.matched[0].title],
      modeType: 'vertical',
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    menuSelect (name) {
      this.$router.push({path: name})
    },
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  }
}
</script>
