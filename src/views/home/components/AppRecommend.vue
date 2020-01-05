<template>
  <div class="recommend-container">
    <swiper ref="bannerSwiper" :options="bannerSwiperOption">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.src" preview="0" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "AppRecommend",
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
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
    height: 3.5rem;
  }
}
</style>
