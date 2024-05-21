<template>
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view />
  </div>

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import {ref} from "vue";
import {Toast} from "vant";
import 'vant/es/toast/style';
import {useRouter} from "vue-router";
import routes from "../config/router.ts";

//-----------------------------------把router对象引进来
const router = useRouter()
// ----------------------------------------修改页面标题
const DEFAULT_TITLE = "伙伴匹配";
const title = ref(DEFAULT_TITLE);

/**
 * 根据路由切换标题
 */
router.beforeEach((to,from) => {
  const toPath = to.path;
  const route = routes.find((route) => {
    return toPath === route.path;
  })
  title.value = route?.title ?? DEFAULT_TITLE;
})
//--------------------------------------------返回页面
const onClickLeft = () => {
  router.back()
};
const onClickRight = () => {
  //带有路径的对象
  router.push('/search')
}

// const active = ref("index");
// const onChange = (index) => Toast(`标签 ${index}`);

</script>

<style scoped>
#content{
  padding-bottom: 50px;
}
</style>





