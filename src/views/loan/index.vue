<template>
  <div class="home-container">
    <div class="banner-container">
      <img src="@/assets/images/banner.jpg" alt="" />
    </div>
    <div class="ad-container">
      <span class="ad-text">全国均可申请，无地域限制</span>
    </div>
    <!-- 锚点定位 -->
    <a id="home"></a>
    <div class="apply-container">
      <div class="apply-title">
        <span>快速在线申请</span>
      </div>
      <div class="apply-form">
        <div class="form-title">
          <span>网上申请</span>
          <span>客服电话回访</span>
          <span>审批放款</span>
        </div>
        <div class="form-container">
          <van-cell-group>
            <van-field
              v-model.trim="formData.username"
              clearable
              label-width="90px"
              label-align="right"
              label="您的姓名"
              placeholder="请填写您的真实姓名"
            />
            <van-field
              v-model="formData.phone"
              clearable
              type="number"
              label-width="90px"
              label-align="right"
              label="手机号码"
              placeholder="请填写您的手机号码"
            />
            <van-field
              v-model.trim="formData.code"
              center
              clearable
              label-align="right"
              label-width="90px"
              label="手机验证码"
              placeholder="请输入短信验证码"
            >
              <van-button
                slot="button"
                size="small"
                type="info"
                v-if="showCode"
                @click="getCode"
                >获取验证码</van-button
              >
              <span slot="button" v-else class="time-item"
                >{{ countTime }}s</span
              >
            </van-field>
            <van-field
              readonly
              clickable
              label="出生日期"
              label-align="right"
              label-width="90px"
              :value="formData.birthday"
              @click="showDatePicker = true"
              placeholder="请选择您的出生日期"
            />
            <van-popup v-model="showDatePicker" round position="bottom">
              <van-datetime-picker
                type="date"
                title="选择日期"
                :min-date="new Date('1960-1-1')"
                :max-date="new Date()"
                @cancel="showDatePicker = false"
                @confirm="onDateConfirm"
              />
            </van-popup>
            <van-field
              readonly
              clickable
              label="工作地址"
              label-align="right"
              label-width="90px"
              :value="formData.address"
              placeholder="请选择您的工作地址"
              @click="showAddressPicker = true"
            />
            <van-popup v-model="showAddressPicker" round position="bottom">
              <van-area
                :area-list="areaList"
                @cancel="showAddressPicker = false"
                @confirm="onAddressChange"
              />
              <!-- <van-picker
                show-toolbar
                title="选择地址"
                :columns="columns"
                @cancel="showAddressPicker = false"
                @confirm="onAddressChange"
              /> -->
            </van-popup>
            <van-field
              readonly
              clickable
              label="贷款种类"
              label-align="right"
              label-width="90px"
              :value="formData.category"
              placeholder="请选择贷款种类"
              @click="showCategoryPicker = true"
            />
            <van-popup v-model="showCategoryPicker" round position="bottom">
              <van-picker
                show-toolbar
                title="贷款种类"
                :columns="loanCategory"
                @cancel="showCategoryPicker = false"
                @confirm="onCategoryChange"
              />
            </van-popup>
            <van-field
              readonly
              clickable
              label="贷款金额"
              label-align="right"
              label-width="90px"
              :value="formData.money"
              placeholder="请选择贷款金额"
              @click="showMoneyPicker = true"
            />
            <van-popup v-model="showMoneyPicker" round position="bottom">
              <van-picker
                show-toolbar
                title="贷款金额"
                :columns="loanMoney"
                @cancel="showMoneyPicker = false"
                @confirm="onMoneyChange"
              />
            </van-popup>
          </van-cell-group>
          <van-button type="info" class="submit-btn" @click="saveForm"
            >立即提交</van-button
          >
          <div class="tips">
            最高可贷30万,急速预审，快速放款
          </div>
        </div>
      </div>
    </div>
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
          <loan-company />
        </swiper-slide>
        <swiper-slide>
          <loan-buy />
        </swiper-slide>
        <swiper-slide>
          <loan-house />
        </swiper-slide>
        <swiper-slide>
          <loan-car />
        </swiper-slide>
      </swiper>
      <div class="apply-btn">
        <van-button type="info" class="submit-btn" @click="handleApply"
          >立即申请</van-button
        >
      </div>
    </div>
    <div class="case-container">
      <div class="case-title">
        客户案例
      </div>
      <div class="case-tips">
        我们已为数万名小企业主与个人提供了快速简便、友好便利的小额贷款技术服务
      </div>
      <div class="case-img">
        <swiper :options="caseSwiperOption" ref="mySwiper2">
          <swiper-slide v-for="item in caseImgs" :key="item.id">
            <img :src="item.img" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="case-about">
        <span class="about-title">
          为您量身打造，用途广泛买房、买车、装修、结婚、医疗……满足多种贷款需求。
        </span>
        <div class="about-content">
          <div class="content-item" v-for="item in caseData" :key="item.label">
            <img src="../../assets/images/icon_news.png" alt="加载失败" />
            <span>
              {{ item.label }}
            </span>
            <p>
              {{ item.msg }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="declare">
        郑重声明：平台只提供贷款咨询服务，放款由银行或金融机构进行，所有贷款申请在未成功贷款前绝不收取任何费用，为了保证您的资金安全，请不要相信任何要求您支付费用的信息、邮件、电话等不实信息。
      </span>
      <p>投资有风险 选择需谨慎</p>
      <p>版权所有：东莞市运通小额贷款有限公司</p>
      <p>备案：粤ICP备190626631号-1</p>
      <p>合作放款银行:平安银行等正规机构</p>
    </div>
  </div>
</template>

<script>
import { loanCategory, loanRange, caseData, caseImgs, areaList } from "./data";
import moment from "moment";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import LoanCompany from "@/components/LoanCompany";
import LoanBuy from "@/components/LoanBuy";
import LoanCar from "@/components/LoanCar";
import LoanHouse from "@/components/LoanHouse";
const citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};
export default {
  data() {
    return {
      formData: {
        birthday: "",
        username: "",
        phone: "",
        address: "",
        category: "",
        money: "",
        code: ""
      },
      columns: [
        {
          values: Object.keys(citys),
          className: "column1"
        },
        {
          values: citys["浙江"],
          className: "column2",
          defaultIndex: 2
        }
      ],
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
      showCode: true,
      showDatePicker: false,
      showAddressPicker: false,
      showCategoryPicker: false,
      showMoneyPicker: false,
      timer: null,
      countTime: 30,
      activeTab: 0 // 活动的tab -index
    };
  },
  components: {
    LoanCompany,
    LoanBuy,
    LoanCar,
    LoanHouse,
    swiper,
    swiperSlide
  },
  computed: {
    loanCategory() {
      return loanCategory;
    },
    loanMoney() {
      return loanRange;
    },
    caseData() {
      return caseData;
    },
    caseImgs() {
      return caseImgs;
    },
    areaList() {
      return areaList;
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  watch: {
    showCode(newVal) {
      if (!newVal) {
        this.codeCountDown();
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    codeCountDown() {
      this.timer = setInterval(() => {
        if (this.countTime === 0) {
          this.showCode = true;
          this.countTime = 30;
          clearInterval(this.timer);
          return;
        }
        this.countTime--;
      }, 1000);
    },
    onDateConfirm(value) {
      // 格式化日期
      this.formData.birthday = moment(value).format("YYYY-MM-DD");
      this.showDatePicker = false;
    },
    // 选择地址
    onAddressChange(values) {
      console.log(values);
      this.showAddressPicker = false;
      // this.formData.address = values.join(" ");
      this.formData.address =
        values[0].name + "/" + values[1].name + "/" + values[2].name;
    },
    // 选择种类
    onCategoryChange(value) {
      this.showCategoryPicker = false;
      this.formData.category = value;
    },
    // 选择地址
    onMoneyChange(value) {
      this.showMoneyPicker = false;
      this.formData.money = value;
    },
    // 锚点定位
    handleApply() {
      location.href = "#home";
    },
    // tab切换
    handleTabChange(index) {
      this.activeTab = index;
      this.swiper.slideTo(index);
    },
    // 表单验证
    validatorForm() {
      // 是否通过验证
      let valid = true;
      for (var key in this.formData) {
        if (!this.formData[key]) {
          this.$toast({
            duration: 2000,
            message: "请填写完整信息",
            className: "common-toast"
          });
          valid = false;
        }
      }
      return valid;
    },
    // 获取验证码
    getCode() {
      this.showCode = false;
    },
    saveForm() {
      let valid = this.validatorForm();
      if (valid) {
        console.log(123);
      }
      // console.log(this.formData);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .banner-container {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
  .ad-container {
    width: 100%;
    padding: 20px;
    background: #f9f9f9;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.125);
    .ad-text {
      font-size: 30px;
      color: #4b7897;
      vertical-align: top;
    }
  }
  .submit-btn {
    width: 100%;
    height: 80px;
    margin: 20px 0 10px;
    border-radius: 10px;
    font-size: 28px;
    background-color: #247db9;
    border-color: #247db9;
  }
  .apply-container {
    .apply-title {
      width: 100%;
      position: relative;
      height: 4px;
      margin: 50px 0 50px;
      background-color: #1b95e6;
      span {
        display: block;
        position: absolute;
        left: 20px;
        top: -25px;
        padding: 10px 30px;
        font-size: 30px;
        color: #fff;
        background: #1b95e6;
        border-radius: 40px;
      }
    }
    .apply-form {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      background: #f8f8f8;
      .time-item {
        display: inline-block;
        width: 100px;
        color: #fff;
        text-align: center;
        background-color: #1989fa;
      }
      .form-title {
        position: relative;
        display: flex;
        padding: 15px 0;
        justify-content: space-around;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 25px;
        color: #a0a0a0;
      }
      .form-container {
        .van-cell {
          margin-top: 20px;
          padding: 25px;
          font-size: 26px;
          border: 1px solid #ccc;
        }
        /deep/ .van-cell__title {
          margin-right: 10px;
          padding-right: 10px;
          border-right: 1px solid #ccc;
        }

        .tips {
          text-align: center;
          color: #247db9;
        }
      }
      .van-picker {
        /deep/.van-picker__toolbar {
          height: 60px;
          line-height: 60px;
          .van-picker__cancel,
          .van-picker__confirm {
            font-size: 26px;
          }
          .van-picker__title {
            font-size: 28px;
          }
        }
        /deep/ .van-picker-column {
          font-size: 26px;
        }
      }
    }
  }
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
    .apply-btn {
      padding: 0 20px;
    }
  }
  .case-container {
    width: 100%;
    margin-top: 60px;
    .case-title {
      position: relative;
      width: 100%;
      padding: 0 10px;
      height: 65px;
      line-height: 65px;
      font-size: 30px;
      color: #4b7897;
      box-sizing: border-box;
      border-bottom: 1px solid #4b7897;
      border-top: 1px solid #4b7897;
    }
    .case-tips {
      color: #4b7897;
      padding: 20px 5px;
      box-sizing: border-box;
      font-size: 23px;
      text-align: center;
    }
    .case-img {
      height: 160px;
      img {
        width: 100%;
      }
    }
    .case-about {
      padding: 10px 20px 30px;
      background-color: #f7f7f7;
      border-bottom: 5px solid #4b7897;
      .about-title {
        font-size: 23px;
      }
      .about-content {
        .content-item {
          display: flex;
          align-items: center;
          margin-top: 30px;
          span {
            margin: 0 50px 0 20px;
            font-size: 26px;
          }
          p {
            font-size: 23px;
            color: #9c9c9c;
          }
        }
      }
    }
  }
  .footer {
    margin-top: 15px;
    padding: 0 10px;
    text-align: center;
    .declare {
      font-size: 23px;
      color: #ffb24f;
    }
    p {
      color: #9c9c9c;
      margin: 5px 0;
    }
  }
}
</style>
