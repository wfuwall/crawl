// 使用axios抓取掘金文章的点赞和评论接口数据
const axios = require('axios');
axios.get('https://timeline-merger-ms.juejin.im/v1/get_related_entry', {
  params: {
    src: 'web',
    limit: 5,
    entryId: '5cc2511e5188252e843b539c'
  }
}).then(res => {
  const { entrylist } = res.data.d
  const textList = entrylist.map((item, index) => {
    return `文章《${item.title}》被收藏 ${item.collectionCount}次 评论${item.commentsCount}次`
  })
  textList.forEach(item => {
    console.log(item)
  })
})