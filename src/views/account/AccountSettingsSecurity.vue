<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard>
        <VForm>
          <VCardText>
            <h5 class="m-3">Parolni o'zgartirish</h5>
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Eski parol</label>
                  <input type="password" class="form-control mx-md-6" id="validationTooltip01" v-model="currentPassword"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Yangi parol</label>
                  <input type="password" class="form-control mx-md-6" id="validationTooltip01" v-model="currentPassword"
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
                  <label for="validationTooltip01" class="mb-2">Tasdiqlangan parol</label>
                  <input type="password" class="form-control mx-md-6" id="validationTooltip01" v-model="currentPassword"
                         required>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText class="m-3">
            <p class="mt-2">
              Parol talablari:
            </p>
            <ul id="pass">
              <li>
                Kamida 8 ta belgi - qancha ko'p bo'lsa, shuncha yaxshi
              </li>
              <li>
                Kamida bitta kichik harf
              </li>
              <li>
                Kamida bitta raqam yoki belgi
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4 m-3">
            <VBtn color="#9155FDFF"
                  variant="tonal" style="color:white">Saqlash
            </VBtn>

            <VBtn
                type="reset"
                color="#E2E6EAFF"
                variant="tonal"
            >
              Qayta o'rnatish
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script>

export default {
  name: "AccountSettingsSecurity",
  data() {
    return {
      isCurrentPasswordVisible: false,
      isNewPasswordVisible: false,
      isConfirmPasswordVisible: false,
      currentPassword: '12345678',
      newPassword: '87654321',
      confirmPassword: '87654321',

    }
  },
}
</script>

<style>

.mt-2 {

  font-size: 16px;
  font-weight: 600;

}

#pass li {
  margin-bottom: 2px;
}


</style>
