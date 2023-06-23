<!--
	This is the sign in page, it uses the dashboard layout in:
	"./layouts/Default.vue" .
 -->

<template>
  <div class="sign-in">

    <a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

      <!-- Sign In Form Column -->
      <a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
        <h1 class="mb-15">Tizimga kirish</h1>
        <h5 class="font-regular text-muted">Kirish uchun login va parolingizni kiriting !</h5>

        <!-- Sign In Form -->
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
            :hideRequiredMark="true"
        >
          <a-form-item class="mb-10" :colon="false">
            <label class="mb-1">Login</label>
            <the-mask type="text" placeholder="(99)123-45-67" v-model="loginVM.login" mask="(##)###-##-##"
                   class="form-control mx-md-6"
                      required></the-mask>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </a-form-item>
          <a-form-item class="mb-5" :colon="false">
            <label class="mb-1">Parol</label>
            <the-mask v-model="loginVM.password" mask='XXXXX'
                      class="form-control mx-md-6"
                      type="password" placeholder="********"></the-mask>
          </a-form-item>
          <a-form-item class="mb-10">
            <a-switch v-model="this.rememberMe"></a-switch>
            Meni eslaysizmi
          </a-form-item>
          <a-form-item>
            <a-button type="primary" block html-type="submit" @click="login" class="login-form-button">
              Tizimga kirish
            </a-button>
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->

        <p class="font-semibold text-muted">Hisobingiz yo'qmi?
          <router-link to="/sign-in" class="font-bold text-dark"> Ro'yxatdan o'tish</router-link>
        </p>
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img" style="left: 4%">
        <video id="noContextMenu" class="w-full lg:w-3/4 h-auto" width="329" height="500"
               poster="https://content.presentermedia.com/images/presentermedia-images/animation_holder.jpg" loop=""
               autoplay="" muted="">
          <source
              src="https://content.presentermedia.com/content/animsp/00018000/18388/construction_workers_shaking_hands_500_nwm.mp4">
        </video>
      </a-col>
      <!-- Sign In Image Column -->

    </a-row>

  </div>
</template>

<script>

import router from "../router";
import {notification} from 'ant-design-vue';
import axios from 'axios'
import AccountService from "../account/AccountService";

export default ({
  data() {
    return {
      loginVM: {
        login: '',
        password: '',

      },
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
    }
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  methods: {

    login() {
      axios.post('http://localhost:5050/api/auth/login', this.loginVM ,{mode:"no-cors"}, {
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          accept: "*/*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": true,
          expires: "0",
          "cache-control": "no-cache,no-store,max-age=0,must-revalidate",
          pragma: "no-cache",
        }
      }).then((res) => {
        const token = res.data.data.accessToken
        console.log(token)
        if (this.rememberMe) {
          console.log(this.rememberMe)
          localStorage.setItem("token", token)
        } else {
          sessionStorage.setItem("token", token)
        }
        // new AccountService(this.$route).retrieveAccount();
        if (res.status === 200 && token !== "") {
          notification['success']({
            message: 'Siz tizimga muvaffaqiyatli kirdingiz !',
            duration: 3,
            style: {
              color: 'white',
              background: '#73FFA4FF'
            }
          });
          router.push("/dashboard");
        } else {
          notification['warning']({
            message: 'Login yoki parol xato',
            duration: 3,
            style: {
              color: 'white',
              background: '#C95D58FF'
            }
          });
          // router.push("/sign-in")
        }
        console.log(res.data)
      })
    },

    // Handles input validation after submission.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  },
  mounted() {

  }
})

</script>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>
