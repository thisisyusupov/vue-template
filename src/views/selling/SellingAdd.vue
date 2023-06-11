<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
      </a-col>
    </a-row>

    <a-row :gutter="24" type="flex">

      <a-col :span="24" class="mb-24">

        <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{padding: 0,}">

          <template #title>
            <a-row type="flex" align="middle">
              <a-col :span="24" :md="12">
                <h5 class="font-semibold m-0">Projects Table</h5>
              </a-col>

            </a-row>
          </template>
          <a-col :span="20" :md="20"
                 style="display: block; padding-left: 22px; align-items: center; justify-content: flex-end">
            <a-form
                id="components-form-demo-normal-login"
            >
              <a-form-item  class="mb-10" label="List Number" :colon="false">
                <a-input  v-model="selling.listNumber"
                         v-decorator="[
						'listNumber',
						{ rules: [{ required: true, message: 'Please input your list number!' }] },
						]" placeholder="List Number"/>
              </a-form-item>
              <a-form-item class="mb-10" label="Date" :colon="false">
                <a-input v-model="selling.date"
                         v-decorator="[
						'listNumber',
						{ rules: [{ required: true, message: 'Please input your date!' }] },
						]" type="date" :fomat="'DD/MM/YYYY'" placeholder="Date"/>
              </a-form-item>

              <a-form-item label="Payment type">
                <a-select class="sell" v-model:value="selling.paymentTypeId" placeholder="Please select your payment type">
                  <a-select-option value="1">Naqd</a-select-option>
                  <a-select-option value="2">Nasiya</a-select-option>
                  <a-select-option value="3">Avans</a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item label="Product type" required>
                <a-select v-model:value="selling.productTypeId" placeholder="Please select your product type">
                  <a-select-option value="1">Qum</a-select-option>
                  <a-select-option value="2">Shlaka blok</a-select-option>
                  <a-select-option value="3">G'isht</a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item label="Unit type" required>
                <a-select v-model="selling.unitTypeId" placeholder="Please select your unit type">
                  <a-select-option value="1">Dona</a-select-option>
                  <a-select-option value="2">Kg</a-select-option>
                  <a-select-option value="3">Kamaz</a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item class="mb-5" label="Amount" :colon="false">
                <a-input onchange="this.add" v-model="selling.amount"
                         v-decorator="[
						'amount',
						{ rules: [{ required: true, message: 'Please input your amount!' }] },
						]" type="number" placeholder="Amount"/>
              </a-form-item>

              <a-form-item class="mb-5" label="Cost" :colon="false">
                <a-input v-model="selling.cost" onkeyup="this.add"
                         v-decorator="[
						'cost',
						{ rules: [{ required: true, message: 'Please input your cost!' }] },
						]" type="number" placeholder="Cost"/>
              </a-form-item>

              <a-form-item class="mb-5" label="Value" :colon="false">
                <a-input v-model="selling.value"
                         v-decorator="[
						'value',
						{ rules: [{ required: false, message: 'Please input your value!' }] },
						]" type="number" placeholder="Value" disabled/>
              </a-form-item>

              <a-form-item>
                <a-button type="primary" block html-type="submit" class="login-form-button" @click="save">
                  SAVE
                </a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-card>
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
    add() {
      console.log("galdiqu")
      return sellling.value = sellling.amount * sellling.cost;
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
label{
  font-size: 17px;
}

</style>
