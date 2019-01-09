import axios from '@/libs/api.request'

export const add = ({ title }) => {
  const data = {
    title
  }
  return axios.request({
    url: '/blog/blog/article/addBlogArticle',
    data,
    method: 'post'
  })
}
