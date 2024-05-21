<template>
  <van-notice-bar speed="70"
      left-icon="volume-o"
      text="星星发亮是为了让每一个人有一天都能找到属于自己的星星。” ——《小王子》"
  />

  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
    <van-swipe-item>
      <img src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%AD%A6%E4%BC%B4%E6%98%93%E5%AF%BB%E5%9B%BE%E7%89%87%E9%9B%86/%E5%A4%95%E9%98%B3.jpg" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%AD%A6%E4%BC%B4%E6%98%93%E5%AF%BB%E5%9B%BE%E7%89%87%E9%9B%86/%E5%A4%A9%E7%A9%BA.jpg" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%AD%A6%E4%BC%B4%E6%98%93%E5%AF%BB%E5%9B%BE%E7%89%87%E9%9B%86/%E6%A0%91.jpg"/>
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%AD%A6%E4%BC%B4%E6%98%93%E5%AF%BB%E5%9B%BE%E7%89%87%E9%9B%86/%E5%82%8D%E6%99%9A.jpg"/>
    </van-swipe-item>

  </van-swipe>
  <van-cell center title="心动模式❤️">
    <template #right-icon>
      <van-switch v-model="isMatchMode" size="24" />
    </template>
  </van-cell>
  <user-card-list :user-list="userList" :loading="loading"/>
  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import {Toast} from "vant";
import UserCardList from "../components/UserCardList.vue";
import myAxios from "./plugins/myAxios.ts";
import {userType} from "../models/user";

const isMatchMode = ref<boolean>(false);

const userList = ref([]);
const loading = ref(true);

/**
 * 加载数据
 */
const loadData = async () => {
  let userListData;
  loading.value = true;
  // 心动模式，根据标签匹配用户
  if (isMatchMode.value) {
    const num = 10;
    userListData = await myAxios.get('/user/match', {
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log('/user/match succeed', response);
          Toast.success('心动模式❤️');
          return response?.data;
        })
        .catch(function (error) {
          console.error('/user/match error', error);
          Toast.fail('请求失败');
        })
  } else {
    // 普通模式，直接分页查询用户
    userListData = await myAxios.get('/user/recommend', {
      params: {
        pageSize: 20,
        pageNum: 1,
      },
    })
        .then(function (response) {
          console.log('/user/recommend succeed', response);
          Toast.success('主页🤗');

          return response?.data?.records;
        })
        .catch(function (error) {
          console.error('/user/recommend error', error);
          Toast.fail('请求失败');
        })
  }
  if (userListData) {
    userListData.forEach((user: userType) => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
  loading.value = false;
}

watchEffect(() => {
  loadData();
})

</script>

<style scoped>
.my-swipe {
  padding-top: 5px;
  /* 你可以添加 padding 或其他样式来确保图片之间有足够的空间 */
  box-sizing: border-box; /* 确保 padding 不会增加轮播项的总宽度 */
}

.my-swipe .van-swipe-item img {
  /* 设置图片的圆角 */
  border-radius: 10px; /* 可以根据需要调整这个值 */
  /* 设置图片的最大宽度和高度，或者具体的尺寸 */
  width: 330px; /* 宽度占满轮播项，但不超过图片原始宽度 */
  height: 160px; /* 高度自动以保持图片的原始比例 */
  display: block;
  margin: 0 auto; /* 水平居中 */
}
</style>
