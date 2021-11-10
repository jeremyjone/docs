<template>
  <p class="td-title">
    {{ msg }}
  </p>
</template>

<script>
export default {
  name: "TitleComponent",

  props: {
    msg: String
  }
};
</script>

<style lang="stylus" scoped>
.td-title
    font-size 20px
    font-weight bold
    display inline
</style>
