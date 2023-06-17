<template>
  <div>
    <!--        v-model="activeTab"-->

    <VTabs
        show-arrows
    >
      <VTab
          v-for="item in tabs"
          :key="item.icon"
          :value="item.tab"
      >
        <VIcon
            size="20"
            start
            :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>
    <VDivider />

    <!--        v-model="activeTab"-->

    <VWindow
        class="mt-5 disable-tab-transition"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>
    </VWindow>
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