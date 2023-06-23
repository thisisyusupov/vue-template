<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard>
        <VForm>
          <VCardText>
            <h5 class="m-3">Ma'lumot qo'shish</h5>
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Ism</label>
                  <input type="text" placeholder="Ism kiriting" v-model="admin.firstName" class="form-control mx-md-6"
                         id="validationTooltip01"
                            required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Familya</label>
                  <input type="text" placeholder="Familyani kiriting" v-model="admin.lastName"
                         class="form-control mx-md-6" id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Sharifi</label>
                  <input type="text" placeholder="Sharifini kiriting" v-model="admin.fatherName"
                         class="form-control mx-md-6" id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12 mb-3">
                  <label class="mb-2" for="validationTooltip01">Jinsi</label>
                  <select class="form-control mx-md-6" v-model="admin.gender" id="validationTooltip01">
                    <option selected>Tanlang...</option>
                    <option value="MAlE">Erkak</option>
                    <option value="FEMALE">Ayol</option>
                  </select>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Tug'ilgan sana</label>
                  <b-form-datepicker
                      placeholder="Tug'ilgan sana"
                      v-model="admin.birthday"
                      dataformatas="YYYY-MM-DD"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      class="form-control mx-md-6"
                      id="datepicker-buttons"
                      :state="true"
                      today-button
                      reset-button
                      close-button
                      locale="en"
                  ></b-form-datepicker>
                </div>
              </VCol>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Email</label>
                  <input type="email" placeholder="Emailni kiriting" v-model="admin.email" class="form-control mx-md-6"
                         id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Passport raqami</label>
                  <input type="text" placeholder="Passport" v-model="admin.passportNumber" class="form-control mx-md-6"
                         id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Address</label>
                  <input type="text" placeholder="Adress" v-model="admin.address" class="form-control mx-md-6"
                         id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Telefon raqami</label>
                  <input type="number" placeholder="Telefon raqami" v-model="admin.login"
                         class="form-control mx-md-6" id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Parol</label>
                  <input type="password" placeholder="Parolni kiriting" v-model="admin.password"
                         class="form-control mx-md-6" id="validationTooltip01"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12 mb-3">
                  <label class="mb-2" for="validationTooltip01">Tizimdagi ro'li</label>
                  <select class="form-control mx-md-6" v-model="admin.systemRoleName" id="validationTooltip01">
                    <option selected>Tanlang...</option>
                    <option value="SYSTEM_ROLE_SUPER_ADMIN">Super Admin</option>
                    <option value="SYSTEM_ROLE_ADMIN">Admin</option>
                    <option value="SYSTEM_ROLE_FORM_MEMBER">Form Member</option>
                  </select>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12 mb-3">
                  <label class="mb-2" for="validationTooltip01">Holati</label>
                  <select class="form-control mx-md-6" v-model="admin.status" id="validationTooltip01">
                    <option selected>Tanlang...</option>
                    <option value="ACTIVE">Activ</option>
                    <option value="PASSIVE">Passiv</option>
                  </select>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4 m-3">
            <VBtn color="#9155FDFF"
                  variant="tonal" style="color:white" @click="save">Saqlash
            </VBtn>

            <VBtn
                type="reset"
                color="#E2E6EAFF"
                variant="tonal"
            >
              Bekor qilish
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script>
import router from "../../router";
export default {
  data() {
    return {
      admin: {
        id: 0,
        lastName: '',
        firstName: '',
        fatherName: '',
        gender: '',
        birthday: 0,
        email: '',
        address: '',
        login: 0,
        passportNumber: '',
        password: 0,
        systemRoleName: 0,
        status: ''
      }
    }
  },
  methods:{
    save() {
      console.log(this.admin)
      this.$http.post('register', this.admin).then((res) => {
        if (res.status === 200 || res.status === 201){
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          // this.showSellItemModal = false
          router.push("/admin-panel")
        }else{
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Malumotlarni saqlashda xatolik yuzaga keldi :( ',
            showConfirmButton: false,
            timer: 1500
          })
        }

      })
    }
  }
}
</script>

<style scoped>

</style>
