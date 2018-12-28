<style scoped>
  .layout {
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    height: 82%;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    text-align: center;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }

  .ivu-row-flex {
    height: 100%;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu :mode="modeType" theme="dark" width="auto" active-key="1" :active-name="this.$route.path" :open-names="openNames"
            @on-select="menuSelect" accordion>
        <div class="layout-logo-left">博客系统</div>
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <Submenu :name="item.name" v-if="!item.leaf && item.children.length > 0">
            <template slot="title">
              <Icon :type="item.iconCls" :size="iconSize"></Icon>
              <span class="layout-text">{{item.title}}</span>
            </template>
            <template v-for="(child,childIndex) in item.children" v-if="!child.hidden">
              <Menu-item :name="child.path">{{child.title}}</Menu-item>
            </template>
          </Submenu>
          <template v-if="item.leaf">
            <Menu-item :name="item.path">
              <Icon :type="item.iconCls" :size="iconSize"></Icon>
              <span class="layout-text">{{item.title}}</span>
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
