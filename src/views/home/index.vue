<template>
  <div class="home-container">
    <swiper ref="bannerSwiper" :options="bannerSwiperOption">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.src" preview="0" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        {
          id: 0,
          src: require("@/assets/home-imgs/banner1.jpg")
        },
        {
          id: 1,
          src: require("@/assets/home-imgs/banner2.jpg")
        },
        {
          id: 2,
          src: require("@/assets/home-imgs/banner3.jpg")
        }
      ],
      bannerSwiperOption: {
        loop: true,
        autoplay: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: rem(85);
  img {
    width: 100%;
    height: rem(180);
  }
}
</style>
