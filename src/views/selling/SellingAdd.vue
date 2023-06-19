<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
      </a-col>
    </a-row>

    <a-row :gutter="24" type="flex">

      <a-col :span="24" class="mb-24">
        <VCard>
          <VForm>
            <VCardText>
              <h5 class="m-3">Mahsulot qo'shish</h5>
              <!-- 👉 Current Password -->
              <VRow>
                <VCol
                    cols="12"
                    md="6"
                >
                  <div class="col-md-12">
                    <label for="validationTooltip01" class="mb-2">Ro'yxat raqami</label>
                    <input v-model="selling.listNumber" type="number" placeholder="Ro'yxat raqami"
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
                    <label for="validationTooltip01" class="mb-2">Sana</label>
                    <b-form-datepicker
                        v-model="selling.date"
                        placeholder="Sana"
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
              </VRow>

              <VRow>
                <VCol
                    cols="12"
                    md="6"
                >
                  <div class="col-md-12 mb-3">
                    <label class="mb-2" for="validationTooltip01">To'lov turi</label>
                    <select v-model:value="selling.paymentTypeId" class="form-control mx-md-6" id="validationTooltip01">
                      <option selected>Tanlang...</option>
                      <option value="1">Naqd</option>
                      <option value="2">Nasiya</option>
                      <option value="3">Avans</option>
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
                    <label class="mb-2" for="validationTooltip01">Mahsulot turi</label>
                    <select v-model:value="selling.productTypeId" class="form-control mx-md-6" id="validationTooltip01">
                      <option selected>Tanlang...</option>
                      <option value="1">Qum</option>
                      <option value="2">Shlaka blok</option>
                      <option value="3">G'isht</option>
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
                    <label class="mb-2" for="validationTooltip01">O'lchov birliki</label>
                    <select v-model="selling.unitTypeId" class="form-control mx-md-6" id="validationTooltip01">
                      <option selected>Tanlang...</option>
                      <option value="1">Dona</option>
                      <option value="2">KG</option>
                      <option value="3">Kamaz</option>
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
                    <label for="validationTooltip01" class="mb-2">Miqdori</label>
                    <input type="number" @change="addAmount" v-model="selling.amount" placeholder="Miqdori"
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
                    <label for="validationTooltip01" class="mb-2">Narxi</label>
                    <input v-model="selling.cost" @change="addCost" type="number" placeholder="Narxi"
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
                    <label for="validationTooltip01" class="mb-2">Qiymati</label>
                    <input v-model="selling.value" type="number" placeholder="0" class="form-control mx-md-6"
                           id="validationTooltip01"
                           disabled>
                    <div class="valid-tooltip">
                      Looks good!
                    </div>
                  </div>
                </VCol>
              </VRow>
              <VBtn class="Selling_save" color="#9155FDFF"
                    @click="save"
                    variant="tonal" style="color:white">Saqlash
              </VBtn>
              <VBtn class="m-3"
                    type="reset"
                    color="#E2E6EAFF"
                    variant="tonal"
              >
                Bekor qilish
              </VBtn>
            </VCardText>
          </VForm>
        </VCard>

      </a-col>
    </a-row>
  </div>
</template>

<script>


import router from "../../router";

export default ({
  data() {
    return {
      selling: {
        id: 0,
        listNumber: '0',
        date: '2010-10-01',
        paymentTypeId: 0,
        productTypeId: 0,
        unitTypeId: 0,
        amount: 0,
        cost: 0,
        value: 0
      }
    }
  },
  methods: {
    addAmount(event) {
      this.selling.amount = event.target.value
      this.selling.value = this.selling.amount * this.selling.cost

    },
    addCost(event) {

      this.selling.cost = event.target.value
      this.selling.value = this.selling.amount * this.selling.cost

    },

    save() {
      console.log(this.selling)
      this.selling.value = this.selling.amount * this.selling.cost;
      this.$http.post('selling/add', this.selling).then(() => {
        this.$swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        // this.showSellItemModal = false
        router.push("/selling")
      })
    },


  }
})

</script>

<style lang="scss">
label {
  font-size: 17px;
}

.Selling_save {
  margin-left: 12px;
  margin-top: 5px;
}
</style>
