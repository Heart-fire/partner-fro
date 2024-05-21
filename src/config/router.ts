// ==============定义一些路由
import Index from "../pages/Index.vue";
import Team  from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import TeamJoinPage from "../pages/TeamJoinPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import TeamCreatePage from "../pages/TeamCreatePage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import  TeamCardList  from "../components/TeamCardList.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";


const routes = [
    // -------------------------------------------------------------Default
    { path: '/', component: Index },
    { path: '/team', title: '找队伍', component: Team },
    { path: '/user', title: '个人信息', component: UserPage },
    { path: '/search', title: '找伙伴', component: SearchPage },
    // ----------------------------------------------------------------User
    { path: '/user/login', title: '登录', component: UserLoginPage },
    { path: '/user/edit', title: '编辑信息', component: UserEditPage },
    { path: '/user/list', title: '用户列表', component: SearchResultPage },
    { path: '/user/update', title: '更新用户', component: UserUpdatePage },
    // ----------------------------------------------------------------Team
    { path: '/team/add', title: '创建队伍', component: TeamAddPage },
    { path: '/team/list', title: '用户列表', component: TeamCardList },
    { path: '/team/update', title: '更新用户', component: TeamUpdatePage },
    { path: '/team/join', title: '更新用户', component: TeamJoinPage },
    { path: '/team/create', title: '更新用户', component: TeamCreatePage },
]

export default routes;
