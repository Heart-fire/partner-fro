<template>
  <template v-if="user">
    <van-cell title="头像" is-link to="/user/edit" >
      <img style="height: 80px;border-radius: 50px;" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="账户" :value="user.userAccount" />
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/team/create"  />
    <van-cell title="我加入的队伍" is-link to="/team/join" />
  </template>
  <div class="container">
    <van-button type="primary" text="联系管理员🧐" @click="show = true" class="custom-button"/>
  </div >
  <van-overlay :show="show" @click="show = false">
    <div class="wrapper">
      <div class="block" />
    </div>
  </van-overlay>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user.ts";

const user =ref();
const router = useRouter();

const show = ref(false);

onMounted(async () =>{
  //获取用户信息
  const res = await getCurrentUser();
  if (res){
    user.value = res;
    Toast.success('个人信息✨');
  } else {
    Toast.fail('获取用户信息失败')
  }
})

const toEdit = (editKey: string,editName: string,currentValue: string) =>{
  router.push({
    path:'/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 250px;
  height: 300px;
  /* 设置背景图片 */
  background-image: url('https://wbe-tilas.oss-cn-hangzhou.aliyuncs.com/%E5%AD%A6%E4%BC%B4%E6%98%93%E5%AF%BB%E5%9B%BE%E7%89%87%E9%9B%86/%E4%BA%8C%E7%BB%B4%E7%A0%81%E5%8A%A0%E5%A5%BD%E5%8F%8B.jpg');
  border-radius: 8px;
  /* 设置背景图片的大小，例如覆盖整个元素 */
  background-size: cover;
  /* 设置背景图片的位置，例如居中显示 */
  background-position: center center;
  /* 设置背景图片是否重复，默认是重复的，但通常我们设置为不重复 */
  background-repeat: no-repeat;
}
/* 添加外部容器的样式，用于定位按钮 */
.container {
  display: flex;
  justify-content: flex-end; /* 将内容靠右对齐 */
  align-items: center; /* 垂直居中，如果按钮需要垂直居中 */
  padding-right: 20px; /* 右侧内边距，根据你的需要调整 */
}
/* 自定义按钮的样式 */
.custom-button {
  margin-top: 8px;
  width: 140px;
  height: 29px;
  background-color: rgb(59, 99, 229);
  border-radius: 7px; /* 边框圆角 */
  border: none; /* 去掉按钮的边框 */
}
</style>