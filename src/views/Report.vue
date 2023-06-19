<template>
  <div>
    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
      </a-col>
    </a-row>

    <a-row :gutter="24" type="flex">
      <a-col :span="24" class="mb-24">
        <AtomSpinner v-if="loading" style="margin-left: 39%; margin-top:10%; margin-bottom: 23%; "
            :animation-duration="1000"
            :size="130"
            color="#ff1d5e"
        />
        <VCard v-else>
          <VForm >
            <VCardText>
              <h5 class="m-3">Hisobot olish</h5>
              <!-- 👉 Current Password -->
              <VRow>
                <VCol
                    cols="12"
                    md="6"
                >
                  <div class="col-md-12">
                    <label class="mb-2">Boshlanish sanasi</label>
                    <b-form-datepicker
                        v-model="report.beginDate"
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
                <VCol
                    cols="12"
                    md="6"
                >
                  <div class="col-md-12">
                    <label class="mb-2">Tugash sanasi</label>
                    <b-form-datepicker
                        v-model="report.endDate"
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
            </VCardText>

            <!-- 👉 Password Requirements -->

            <!-- 👉 Action Buttons -->
            <VCardText>
              <VRow>
                <VCol  cols="12"
                       md="3"
                >
                    <a-button type="primary" block html-type="submit" class="login-form-button" @click="download">
                      DOWNLOAD
                    </a-button>
                </VCol>
              </VRow>
            </VCardText>
          </VForm>
        </VCard>

      </a-col>

    </a-row>
  </div>
</template>

<script>

import { SwappingSquaresSpinner  } from 'epic-spinners'
import { AtomSpinner } from 'epic-spinners'
export default ({
  components: {
    SwappingSquaresSpinner,
    AtomSpinner
  },
  data() {
    return {
      loading: false,
      report: {
        beginDate: '2010-10-01',
        endDate: '2010-10-30'
      }
    }
  },
  methods: {

    download() {
      console.log(this.report)
      this.loading = true;
      this.$http.get('/report/' + this.report.beginDate + "/" + this.report.endDate, {
        'Content-Type': 'blob',
        responseType: "arraybuffer",
      }).then((response) => {
        this.loading = false;
        const url = URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute(
            'download',
            `xisobot.xlsx`
        )
        document.body.appendChild(link)
        link.click()
      })
    }

  }
})

</script>

<style lang="scss">
</style>


<style>
.login-form-button{
  margin-left: 12px;
}

</style>
