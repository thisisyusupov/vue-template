<template>
  <div>
    <!--        v-model="activeTab"-->

<!--    <VTabs background-color="#FFFFFFFF"-->
<!--        show-arrows-->
<!--    >-->
<!--      <VTab-->
<!--          v-for="item in tabs"-->
<!--          :key="item.icon"-->
<!--          :value="item.tab"-->
<!--      >-->
<!--        <VIcon-->
<!--            icon="mdi-domain"-->
<!--        />-->
<!--        {{ item.title }}-->
<!--      </VTab>-->
<!--    </VTabs>-->
<!--    <VDivider />-->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <router-link class="nav-link active" id="home-tab" data-toggle="tab" to="/account/home" role="tab" aria-controls="home" aria-selected="false">Profile</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " id="profile-tab" data-toggle="tab" to="/account/profile" role="tab" aria-controls="profile" aria-selected="true">Xavfsizlik</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="/contact" role="tab" aria-controls="contact" aria-selected="false">Ruxsatnoma</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">  <AccountSettingsAccount /> </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">   <AccountSettingsNotification /> </div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> <AccountSettingsNotification /> </div>
    </div>
    <!--        v-model="activeTab"-->

<!--    <VWindow-->
<!--        class="mt-5 disable-tab-transition"-->
<!--    >-->
<!--      &lt;!&ndash; Account &ndash;&gt;-->
<!--      <VWindowItem value="account">-->
<!--        <AccountSettingsAccount />-->
<!--      </VWindowItem>-->

<!--      &lt;!&ndash; Security &ndash;&gt;-->
<!--      <VWindowItem value="security">-->
<!--        <AccountSettingsSecurity />-->
<!--      </VWindowItem>-->

<!--      &lt;!&ndash; Notification &ndash;&gt;-->
<!--      <VWindowItem value="notification">-->
<!--        <AccountSettingsNotification />-->
<!--      </VWindowItem>-->
<!--    </VWindow>-->
  </div>
</template>

<script>

// import { useRoute } from 'vue-router'



import AccountSettingsAccount from '@/views/account/AccountSettingsAccount.vue'
import AccountSettingsNotification from '@/views/account/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/account/AccountSettingsSecurity.vue'


// tabs
const tab = [
  {
    title: 'Account',
    icon: 'mdi-account-outline',
    tab: 'account',
  },
  {
    title: 'Security',
    icon: 'mdi-lock-open-outline',
    tab: 'security',
  },
  {
    title: 'Notifications',
    icon: 'mdi-bell-outline',
    tab: 'notification',
  },
]

export default {
  name: "AccountSettings",
  components: {
    AccountSettingsAccount,
    AccountSettingsNotification,
    AccountSettingsSecurity
  },
  data() {
    return {
        // route: useRoute(1),
        // activeTab: route.params['account'],
        tabs: tab
    }
  },
  methods: {
    // setup() {
      // const route = useRoute()
      // function pushWithQuery(query) {
      //   router.push({
      //     name: 'search',
      //     query: {
      //       ...route.query,
      //     },
      //   })
      // }
    // },
  }

}
</script>

<style scoped>

</style>
