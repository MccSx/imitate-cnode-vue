<template>
  <div class="post-item">
    <div class="header">
      <div v-if="articleData.top === true" class="tab top">置顶</div>
      <div v-else-if="articleData.good === true" class="tab top">精华</div>
      <div v-else-if="articleData.tab === 'share'" class="tab">分享</div>
      <div v-else-if="articleData.tab === 'ask'" class="tab">问答</div>
      <div v-else-if="articleData.tab === 'job'" class="tab">招聘</div>
      <h2>{{articleData.title}}</h2>
    </div>
    <div class="message">
      <ul>
        <li>发布与 {{articleData.create_at | timeFilter}}</li>
        <!-- <li>作者 {{articleData.author.loginname}}</li> -->
        <li>{{articleData.visit_count}} 次浏览</li>
        <li>来自 {{tabName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name : 'articleConponent',
  data() {
    return {
      articleData: {}
    }
  },
  components: {

  },
  computed: {
    tabName() {
      if (this.articleData.tab === 'share') {
        return '分享'
      } else if (this.articleData.tab === 'aks') {
        return '问答'
      } else if (this.articleData.tab === 'job') {
        return '招聘'
      }
    }
  },
  methods: {
    getArticleData() {
      this.$axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.userId}`)
      .then( res => {
        if (res.data.success === true) {
          this.articleData = res.data.data
          console.log(res.data.data)
          //console.log(this.articleData.author.loginname)
        }
      })
      .catch( err => {
        console.log(err)
      })
    }
  },
  beforeMount() {
    this.getArticleData()
  }
}
</script>

<style scoped>
.post-item{width: 84%; margin: 0 auto; background: white; padding-top: 20px; margin-top: 15px;}
.header{display: flex; align-items: flex-end;}
.header .tab{display: inline-block; white-space: nowrap; margin: 0 10px; font-size: 12px; padding: 0 5px; border-radius: 3px; 
  line-height: 1.5em; height: 1.5em; background: #ccc; color: white;}
.header .tab.top{background: #80BD01;}
.header h2{font-size: 20px; font-weight: bold;}
</style>
