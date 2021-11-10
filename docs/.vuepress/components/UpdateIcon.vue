<template>
  <div class="update-icon">Update {{ v ? `v${v}` : "" }}</div>
</template>

<script>
export default {
  name: "UpdateIcon",

  props: {
    v: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.update-icon
  width 25px
  height 15px
  font-size 12px
  font-family 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  padding 2px 5px
  display inline
  background-color orange
  border-radius 3px
  box-shadow 1px 1px 5px 0px grey
</style>
