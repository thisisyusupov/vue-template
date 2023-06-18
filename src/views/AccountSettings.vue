<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <router-link class="nav-link active" id="home-tab" data-toggle="tab"  to="/account/home" role="tab" aria-controls="account" aria-selected="false"><img style="width: 25px; height: 25px" src="@/assets/images/profile.gif"> Profile</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" id="profile-tab" data-toggle="tab" to="/account/profile" role="tab" aria-controls="security" aria-selected="false"><img style="width: 25px; height: 25px" src="@/assets/images/password.gif"> Xavfsizlik</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" id="contact-tab" data-toggle="tab" to="/account/permission" role="tab" aria-controls="permission" aria-selected="false"><img style="width: 25px; height: 25px" src="@/assets/images/shield.gif"> Ruxsatnoma</router-link>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="home-tab">  <AccountSettingsAccount /> </div>
      <div class="tab-pane fade" id="security" role="tabpanel" aria-labelledby="profile-tab">   <AccountSettingsSecurity /> </div>
      <div class="tab-pane fade" id="permission" role="tabpanel" aria-labelledby="contact-tab"> <AccountSettingsNotification /> </div>
    </div>
  </div>
</template>

<script>



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
