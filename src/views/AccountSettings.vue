<template>
  <div>
    <TabView class="tabview-custom">
      <TabPanel>
        <template #header>
          <div class="m-2" style="font-weight:600;">
            <img style="width: 25px; height: 25px" src="@/assets/images/profile.gif"> <span class="mt-1">Profile</span>
          </div>
        </template>
        <p>
          <AccountSettingsAccount />
        </p>
      </TabPanel>
      <TabPanel>
        <template #header>
          <div class="m-2" style="font-weight:600;">
            <img style="width: 25px; height: 25px" src="@/assets/images/password.gif"> Xavfsizlik
          </div>
        </template>
        <p>
          <AccountSettingsSecurity />
        </p>
      </TabPanel>
      <TabPanel>
        <template #header>
          <div class="m-2" style="font-weight:600;">
            <img style="width: 25px; height: 25px" src="@/assets/images/shield.gif"> Ruxsatnoma
          </div>
        </template>
        <p>
          <AccountSettingsNotification />
        </p>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>



import AccountSettingsAccount from '@/views/account/AccountSettingsAccount.vue'
import AccountSettingsNotification from '@/views/account/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/account/AccountSettingsSecurity.vue'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

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
    TabView,
    TabPanel,
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
    changeTab(id){
      if (id === 1){
        var element1 = document.querySelector('#account');
        element1.classList.add('show active');
      }else if (id === 2) {
        var element2 = document.querySelector('#security');
        element2.classList.add('show active');
      }else{
        var element3 = document.querySelector('#permission');
        element3.classList.add('show active');
      }
    }
  }

}
</script>

<style scoped>

</style>
