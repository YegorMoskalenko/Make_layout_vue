<template>
  <div class="main">
    <Banner />
    <MainContent />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import MainContent from '@/components/MainContent'
export default {
  components: {
    Banner,
    MainContent
  }
}
</script>

<style lang="less">
.main{
  display: flex;
  flex-direction: column;
}
</style>