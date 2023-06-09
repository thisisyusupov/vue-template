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
              <a-form-item class="mb-10" label="Begin Date" :colon="false">
                <a-input v-model="report.beginDate"
                         v-decorator="[
						'beginDate',
						{ rules: [{ required: true, message: 'Please input your date!' }] },
						]" type="date" placeholder="Begin Date"/>
              </a-form-item>

              <a-form-item class="mb-10" label="End Date" :colon="false">
                <a-input v-model="report.endDate"
                         v-decorator="[
						'endDate',
						{ rules: [{ required: true, message: 'Please input your date!' }] },
						]" type="date" placeholder="End Date"/>
              </a-form-item>

              <a-form-item>
                <a-button type="primary" block html-type="submit" class="login-form-button" @click="download">
                  DOWNLOAD
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


export default ({
  data() {
    return {
      report: {
        beginDate: '2010-10-01',
        endDate: '2010-10-30'
      }
    }
  },
  methods: {

    download() {
      console.log(this.report)
      this.$http.post('report', this.report).then(() => {
        this.$swal.fire('Saved', '', 'Success')
      })
    }

  }
})

</script>

<style lang="scss">
</style>


<style scoped>

</style>
