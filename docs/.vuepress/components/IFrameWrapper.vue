<template>
  <div class="wrapper">
    源码连接：<a :href="src" target="_blank">跳转到源码页面</a><br />
    示例：
    <iframe :src="src" frameborder="0" class="container" id="iframe" />
  </div>
</template>

<script>
export default {
  name: "IFrameWrapper",

  props: {
    src: String
  }
}
</script>

<style scoped lang="stylus">

.wrapper {
  position: relative;
  width: 100%;
}

.container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: auto;
}
</style>