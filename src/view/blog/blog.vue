<template>
    <div>
      <Table highlight-row ref="blogList" :columns="columns" :data="blogData"></Table>
      <Button @click="handleClearCurrentRow">Clear</Button>
      <Page :total="100" show-sizer show-elevator show-total/>
    </div>
</template>

<script>

export default {
  data () {
    return {
      columns: [
        { title: '标题', key: 'title', align: 'center', width: 200 },
        { title: '发布者', key: 'name', align: 'center', width: 200 },
        { title: '发布状态', key: 'articleStatus', align: 'center', width: 200 },
        { title: '发布时间', key: 'createTime', align: 'center', width: 200 }
      ],
      blogData: [
      ]
    }
  },
  methods: {
    handleClearCurrentRow () {
      this.$refs.currentRowTable.clearCurrentRow()
    }
  },
  mounted: {

  }
}

</script>

<style>

</style>
