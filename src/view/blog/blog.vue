<template>
    <div>
      <Button @click="showBlogAddFormModal">发布文章</Button>
      <Table highlight-row ref="blogList" :columns="columns" :data="blogData"></Table>
      <Page :total="100" show-sizer show-elevator show-total/>
      <Modal v-model="blogAddFormModal" draggable scrollable title="发布文章" @on-ok="blogAdd">
        <Form :model="blogAddForm" label-position="right" :label-width="100">
          <FormItem label="标题">
            <Input v-model="blogAddForm.title"></Input>
          </FormItem>
        </Form>
      </Modal>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  data () {
    return {
      modal1: false,
      blogAddFormModal: false,
      blogAddForm: {},
      columns: [
        { title: '标题', key: 'title', align: 'center', width: 200 },
        { title: '发布者', key: 'name', align: 'center', width: 200 },
        { title: '发布状态', key: 'articleStatus', align: 'center', width: 200 },
        { title: '发布时间', key: 'createTime', align: 'center', width: 200 }
      ],
      blogData: []
    }
  },
  methods: {
    ...mapActions([
      'addBlog'
    ]),
    showBlogAddFormModal () {
      this.blogAddFormModal = true
    },
    blogAdd () {
      const title = this.blogAddForm.title
      this.addBlog({ title }).then(res => {
        this.$router.push({
          name: 'home'
        })
      })
    },
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
