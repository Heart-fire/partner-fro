<template>
  <van-skeleton title avatar :row="3" :loading="prop.loading" v-for="user in prop.userList">
    <van-card
        :desc="user.profile"
        :title="`${user.username}（${user.planetCode}）`"
        :thumb="user.avatarUrl"
    >
      <template #tags>
        <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
          {{ tag }}
        </van-tag>
      </template>
      <template #footer>
        <van-button size="mini">联系我</van-button>
      </template>
    </van-card>
  </van-skeleton>
</template>

<script setup lang="ts">
import {userType} from "../models/user";

interface UserCardListProps {
  loading: boolean;
  userList: userType[];
}

const prop = withDefaults(defineProps<UserCardListProps>(), {
  // default{data} 与 data{props}中的loading属性只保留一个。否则就会一直加载骨架屏
  // loading: true,
  // @ts-ignore
  userList: [] as userType[],
});

</script>

<style scoped>

</style>
