<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" clearable="true" @search="onSearch"/>
    <van-button type="primary" @click="doJoinTeam">创建队伍</van-button>
    <team-card-list :team-list="teamList"/>
    <van-empty v-if="teamList.length < 1" description="数据为空"/>
  </div>
</template>


<script setup>
//跳转到加入队伍页面
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "./plugins/myAxios.ts";
import {Toast} from "vant";
import TeamCardList from "../components/TeamCardList.vue";

const router = useRouter()

//跳转到加入队伍页面
const doJoinTeam = () => {
  router.push({
    path: "/team/add"
  })
}

const teamList = ref([]);

const listTeam =async (val = '') => {
  const res = await myAxios.get("/team/list/my/create",{
    params: {
      searchText:val,
      pageNum:1,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    Toast.fail('加载队伍失败，请刷新重试');
  }
}

//页面加载时只触发一次
onMounted( () => {
  listTeam();
})

//搜索
const onSearch = (val) => {
  listTeam(val);
};

</script>


<style scoped>

</style>