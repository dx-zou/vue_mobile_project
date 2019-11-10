<template>
  <div class="home-container">
    <img
      v-lazy="require('@/assets/home-imgs/banner1.jpg')"
      preview="0"
      alt=""
    />
    <img
      v-lazy="require('@/assets/home-imgs/banner1.jpg')"
      preview="0"
      alt=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: 90px;
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
