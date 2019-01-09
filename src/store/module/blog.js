import { add } from '@/api/blog'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    // 发布博客
    addBlog ({ commit }, {title}) {
      title = title.trim()
      return new Promise((resolve, reject) => {
        add({
          title
        }).then(res => {
          const data = res.data
          console.log(data)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
