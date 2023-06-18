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
                  <input type="text" placeholder="Ism kiriting" class="form-control mx-md-6" id="validationTooltip01"
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
                  <input type="text" placeholder="Familyani kiriting" class="form-control mx-md-6" id="validationTooltip01"
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
                  <label class="mb-2" for="validationTooltip01">Jinsi</label>
                  <select class="form-control mx-md-6" id="validationTooltip01">
                    <option selected>Tanlang...</option>
                    <option value="1">Erkak</option>
                    <option value="2">Ayol</option>
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
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Tug'ilgan sana</label>
                  <b-form-datepicker
                      placeholder="Tug'ilgan sana"
                      class="form-control mx-md-6"
                      id="datepicker-buttons"
                      today-button
                      reset-button
                      close-button
                      locale="en"
                  ></b-form-datepicker>
                </div>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                  cols="12"
                  md="6"
              >
                <div class="col-md-12">
                  <label for="validationTooltip01" class="mb-2">Email</label>
                  <input type="email" placeholder="Eamilni kiriting" class="form-control mx-md-6" id="validationTooltip01"
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
                  <label for="validationTooltip01" class="mb-2">Adress</label>
                  <input type="text" placeholder="Adress" class="form-control mx-md-6" id="validationTooltip01"
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
                  <input type="number" placeholder="Telefon raqami" class="form-control mx-md-6" id="validationTooltip01"
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
                  <label class="mb-2" for="validationTooltip01">Tizimdaki ro'li</label>
                  <select class="form-control mx-md-6" id="validationTooltip01">
                    <option selected>Tanlang...</option>
                    <option value="SUPER_ADMIN">Super Admin</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FORM_MEMBER">Form Member</option>
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
                <div class="col-md-12 mb-3">
                  <label class="mb-2" for="validationTooltip01">Holati</label>
                  <select class="form-control mx-md-6" id="validationTooltip01">
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
                  variant="tonal" style="color:white">Saqlash
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
export default {
  name: "AdminPanel"
}
</script>

<style scoped>

</style>
