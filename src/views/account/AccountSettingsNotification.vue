<template>
  <VCard>

    <VCardText>
      <h5 class="m-3">Ruxsatlar</h5>

     <p class="m-3">Siz dasturdan foydalanuvchilarga ruxsat berishinggiz mumkin.</p>
    </VCardText>

    <table class="table table-hover ">
      <thead>
      <tr>
        <th scope="col">
          Type
        </th>
        <th scope="col">
          EMAIL
        </th>
        <th scope="col">
          BROWSER
        </th>
        <th scope="col">
          App
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="device in recentDevices"
          :key="device.type"
      >
        <td>
          {{ device.type }}
        </td>
        <td>
          <input class="form-check-input" v-model="device.email" type="checkbox" value=""  required>
        </td>
        <td>
          <input class="form-check-input" v-model="device.browser" type="checkbox" value=""  required>
        </td>
        <td>
          <input class="form-check-input" v-model="device.app" type="checkbox" value=""  required>
        </td>
      </tr>
      </tbody>
    </table>

    <VCardText>
      <VForm @submit.prevent="() => {}" class="m-3">
        <div class="d-flex flex-wrap gap-4 mt-4">
          <VBtn type="submit" color="#9155FDFF"
                variant="tonal" style="color:white">
            Saqlash
          </VBtn>
          <VBtn
              type="reset"
              color="#E2E6EAFF"
              variant="tonal"
          >
            Qayta o'rnatish
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>

<script>
const recentDevice = [
  {
    type: 'New for you',
    email: true,
    browser: true,
    app: true,
  },
  {
    type: 'Account activity',
    email: true,
    browser: true,
    app: true,
  },
  {
    type: 'A new browser used to sign in',
    email: true,
    browser: true,
    app: false,
  },
  {
    type: 'A new device is linked',
    email: true,
    browser: false,
    app: false,
  },
]

export default {
  name: "AccountSettingsNotification",
  data() {
    return {
      selectedNotification: 'Only when I\'m online',
      recentDevices: recentDevice
    }
  },
}
</script>

<style scoped>

</style>
