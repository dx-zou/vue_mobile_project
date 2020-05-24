<template>
  <div class="home-container">
    <div class="category-container">
      <div class="tab-container">
        <div
          v-for="item in cateList"
          :key="item.index"
          class="tab-item"
          :class="activeTab == item.index ? 'tab-active' : ''"
          @click="handleTabChange(item.index)"
        >
          {{ item.name }}
        </div>
      </div>
      <swiper ref="mySwiper" :options="categorySwiperOption">
        <swiper-slide>
          12
        </swiper-slide>
        <swiper-slide>
          34
        </swiper-slide>
        <swiper-slide>
          56
        </swiper-slide>
        <swiper-slide>
          78
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      // 贷款类别
      cateList: [
        { index: 0, name: "创业贷 " },
        { index: 1, name: "消费贷 " },
        { index: 2, name: "购房贷 " },
        { index: 3, name: "购车贷 " }
      ],
      // 案例swiper 配置
      caseSwiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true
      },
      // 分类swiper
      categorySwiperOption: {
        on: {
          transitionEnd: () => {
            this.activeTab = this.swiper.activeIndex;
          }
        }
      },
      activeTab: 0 // 活动的tab -index
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    // 选择种类
    onCategoryChange(value) {
      this.showCategoryPicker = false;
      this.formData.category = value;
    },
    // tab切换
    handleTabChange(index) {
      this.activeTab = index;
      this.swiper.slideTo(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .category-container {
    margin-top: 40px;
    .tab-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #eee;
      box-shadow: 0px 3px 5px 0px #ccc;
      .tab-item {
        flex: 1;
        font-size: 28px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        &.tab-active {
          color: #4b7897;
          border-bottom: 5px solid #4b7897;
        }
      }
    }
    .swiper-container {
      .swiper-slide {
        padding: 0 20px;
        box-sizing: border-box;
        // width: 100%;k
      }
    }
  }
}
</style>
