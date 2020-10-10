<template>
  <div>
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3">
          <img :src="locationIcon" alt width="50%" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper -->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img :src="banner.image" alt width="100%" v-lazy="banner.image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
      <div v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <span>{{ cate.mallCategoryName }}</span>
      </div>
    </div>
    <!--AD banner area-->
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
    <!-- recommend goods area -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- <SwiperDefault></SwiperDefault>
        <SwiperTwo></SwiperTwo>-->
      </div>
    </div>
    <!--floor one area-->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
              <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodsInfo>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from '@/serviceAPI.config.js'
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import floorComponent from '../component/floorComponent'
import goodsInfo from '../component/goodsInfoComponent'
// import { toMoney } from '@/filter/moneyFilter.js'
// import SwiperDefault from '../swiper/swiperDefault'
// import SwiperTwo from '../swiper/swiper2'
export default {
  components: {
    // SwiperDefault,
    // SwiperTwo
    swiper,
    swiperSlide,
    floorComponent,
    goodsInfo
  },
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      category: [],
      adBanner: {},
      bannerPicArray: [],
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods:[], //热卖商品
      swiperOption: {
        loop: true,
        autoplay: true,
        // direction: "vertical",
        pagination: {
          // el: ".swiper-pagination",
          // clickable: true
        }
      }
    };
  },
  created() {
    console.log('wahah')
    window.addEventListener('setItemEvent', (e) => {
      if (e.key === 'admin') {
        console.log('111111', '-----')
      }
    })
    //
    axios({
      // url: "/static/json/index.json",
      url: url.getShoppingMallInfo,
      method: "get"
    })
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          this.category = res.data.data.category;
          this.adBanner = res.data.data.advertesPicture; //获得广告图片
          this.bannerPicArray = res.data.data.slides; //轮播图片
          this.recommendGoods = res.data.data.recommend; //推荐商品
          this.floor1 = res.data.data.floor1; //楼层1数据
          this.floor2 = res.data.data.floor2              //楼层2数据
          this.floor3 = res.data.data.floor3              //楼层3数据
          this.floorName = res.data.data.floorName        //楼层名称
          this.hotGoods = res.data.data.hotGoods           //热卖商品
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
  }
};
</script>

<style>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid 1px !important;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area {
  width: 20rem;
  clear: both;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area{
  text-align: center;
  font-size:14px;
  height: 1.8rem;
  line-height:1.8rem;
}
</style>