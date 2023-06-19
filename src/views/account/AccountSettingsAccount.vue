<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">
        <VCardText class="d-flex ml-3">
          <!-- 👉 Avatar -->
          <VAvatar style="margin-right: 15px"
                   rounded="0"
                   size="120"
          >
            <VImg
                src="https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/1.png?d79cbd6eda5ee96bfdfc8773ab6c1ee7"></VImg>
          </VAvatar>
          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-3" style="margin-top: 25px">
            <div class="d-flex flex-wrap gap-3">
              <VBtn color="#9155FDFF"
              >
                <!--                  @click=""-->
                <VIcon
                    icon="mdi-cloud-upload-outline"
                    class="d-sm-none"
                />
                <span class="d-none d-sm-block">Yangi rasm yuklang</span>
              </VBtn>

              <input
                  ref="refInputEl"
                  type="file"
                  name="file"
                  accept=".jpeg,.png,.jpg,GIF"
                  hidden
                  @input="changeAvatar"
              >

              <VBtn class="btn btn-outline-danger"
                    type="reset"
                    color="error"
                    outlined="true"
                    @click="resetAvatar"
              >
                <span class="d-none d-sm-block">Qayta o'rnatish</span>
                <VIcon
                    icon="mdi-refresh"
                    class="d-sm-none"
                />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">
              Ruxsat berilgan JPG, GIF yoki PNG. Maksimal hajmi 800K
            </p>
          </form>
        </VCardText>

        <VDivider/>

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                  md="6"
                  cols="12"
              >
<!--                <VTextField-->
<!--                    type="text"-->
<!--                    v-model="accountDataLocal.firstName"-->
<!--                    label="First Name"-->
<!--                />-->
                <div class="col-md-12 mb-3">
                  <label for="validationTooltip01" class="mb-2">Ism</label>
                  <input type="text" class="form-control mx-md-6" id="validationTooltip01" placeholder="Isminggizni kiriting" v-model="accountDataLocal.firstName" required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                  md="6"
                  cols="12"
              >
                <div class="col-md-12 mb-3">
                  <label for="validationTooltip01" class="mb-2">Familya</label>
                  <input type="text" class="form-control mx-md-6" id="validationTooltip01" placeholder="Familanggizni kiriting" v-model="accountDataLocal.firstName" required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>

              <!-- 👉 Email -->
              <VCol
                  cols="12"
                  md="6"
              >
<!--                <VTextField-->
<!--                    v-model="accountDataLocal.email"-->
<!--                    label="E-mail"-->
<!--                    type="email"-->

                <div class="col-md-12 mb-3">
                  <label for="validationTooltip01" class="mb-2">Email</label>
                  <input type="email" class="form-control mx-md-6" id="validationTooltip01" placeholder="Emailinggizni kiriting" v-model="accountDataLocal.firstName" required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>

              <!-- 👉 Organization -->
              <VCol
                  cols="12"
                  md="6"
              >
<!--                <VTextField-->
<!--                    v-model="accountDataLocal.org"-->
<!--                    label="Organization"-->
                <div class="col-md-12 mb-3">
                  <label for="validationTooltip01" class="mb-2">Telefon raqam</label>
                  <input type="number" class="form-control mx-md-6" id="validationTooltip01" placeholder="Telefon raqamini kiriting" v-model="accountDataLocal.firstName" required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>

              <!-- 👉 Phone -->
              <VCol
                  cols="12"
                  md="6"
              >
<!--                <VTextField-->
<!--                    v-model="accountDataLocal.phone"-->
<!--                    label="Phone Number"-->
                <div class="col-md-12 mb-3">
                  <label class="mb-2" for="inlineFormCustomSelectPref">Jinsi</label>
                  <select class="form-control mx-md-6" id="inlineFormCustomSelectPref">
                    <option selected>Tanlang...</option>
                    <option value="1">Erkak</option>
                    <option value="2">Ayol</option>
                  </select>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>

              <!-- 👉 Address -->
              <VCol
                  cols="12"
                  md="6">
                <div class="col-md-12 mb-3">
                  <label for="validationTooltip01" class="mb-2">Adress</label>
                  <input type="text" placeholder="Adress" class="form-control mx-md-6" id="inlineFormCustomSelectPref"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                  cols="12"
                  class="d-flex flex-wrap gap-4"

              >
                <VBtn color="#9155FDFF">O'zgarishlarni saqlash</VBtn>

                <VBtn
                    color="#FF4081"
                    variant="tonal"
                    type="reset"
                    @click.prevent="resetForm"

                >
                  Qayta o'rnatish
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Deactivate Account -->
      <VCard title="Deactivate Account">
        <VCardText>
          <div class="form-check">
            <input class="form-check-input" v-model="isAccountDeactivate" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Men hisobimning o'chirilganligini tasdiqlayman
            </label>
          </div>

          <button type="button" aria-pressed="!isAccountDeactivated" class="btn btn-danger mt-3">Hisobni o'chirish</button>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script>

const accountData = {
  avatarImg: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/1.png?d79cbd6eda5ee96bfdfc8773ab6c1ee7',
  firstName: 'john',
  lastName: 'Doe',
  email: 'johnDoe@example.com',
  org: 'ThemeSelection',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zip: '10001',
  country: 'USA',
  language: 'English',
  timezone: '(GMT-11:00) International Date Line West',
  currency: 'USD',
}

export default {
  name: "AccountSettingsAccount",
  data() {
    return {
      isAccountDeactivated: false,
      accountDataLocal: structuredClone(accountData),
    }
  },
  methods: {
    resetForm() {
      this.accountDataLocal.value = structuredClone(accountData)
    },
    resetAvatar() {
      accountDataLocal.value.avatarImg = accountData.avatarImg
    },
    changeAvatar(file) {
      const fileReader = new FileReader()
      const {files} = file.target
      if (files && files.length) {
        fileReader.readAsDataURL(files[0])
        fileReader.onload = () => {
          if (typeof fileReader.result === 'string')
            accountDataLocal.value.avatarImg = fileReader.result
        }
      }
    }
  }
}


</script>

<style>

.form-control {
  height: 46px;
}
/*.mt-3{*/
/*  background-color: #FF8A80;*/
/*  border-color: #FF8A80;*/
/*}*/

.form-check-label {
  font-family: unset;
  font-size: 110%;
  margin: 4px;
  font-weight: 500;
}

.form-check {
  height: 50px;
}


.form-check-input[type=checkbox] {
   border-radius: 0.25em;
   width: 22px;
   height: 22px;
 }

</style>
