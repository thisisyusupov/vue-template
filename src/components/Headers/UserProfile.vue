<template>
    <VBadge
        dot
        location="bottom right"
        offset-x="3"
        offset-y="3"
        color="success"
        bordered
    >
      <VAvatar
          class="cursor-pointer"
          color="primary"
          variant="tonal"
      >
        <VImg :src="avatar1" />

        <!-- SECTION Menu -->
        <VMenu
            activator="parent"
            width="230"
            location="bottom end"
            offset="14px"
        >
          <VList>
            <!-- 👉 User Avatar & Name -->
            <VListItem>
              <template #prepend>
                <VListItemAction start>
                  <VBadge
                      dot
                      location="bottom right"
                      offset-x="3"
                      offset-y="3"
                      color="success"
                  >
                    <VAvatar
                        color="primary"
                        variant="tonal"
                    >
                      <VImg :src="avatar1" />
                    </VAvatar>
                  </VBadge>
                </VListItemAction>
              </template>

              <VListItemTitle class="font-weight-semibold">
                John Doe
              </VListItemTitle>
              <VListItemSubtitle>Admin</VListItemSubtitle>
            </VListItem>
            <VDivider class="my-2" />

            <!-- 👉 Profile -->
            <VListItem link>
              <template #prepend>
                <VIcon
                    class="me-2"
                    icon="mdi-account-outline"
                    size="22"
                />
              </template>

              <VListItemTitle>Profile</VListItemTitle>
            </VListItem>

            <!-- 👉 Settings -->
            <VListItem link>
              <template #prepend>
                <VIcon
                    class="me-2"
                    icon="mdi-cog-outline"
                    size="22"
                />
              </template>

              <VListItemTitle>Settings</VListItemTitle>
            </VListItem>

            <!-- 👉 Pricing -->
            <VListItem link>
              <template #prepend>
                <VIcon
                    class="me-2"
                    icon="mdi-currency-usd"
                    size="22"
                />
              </template>

              <VListItemTitle>Pricing</VListItemTitle>
            </VListItem>

            <!-- 👉 FAQ -->
            <VListItem link>
              <template #prepend>
                <VIcon
                    class="me-2"
                    icon="mdi-help-circle-outline"
                    size="22"
                />
              </template>

              <VListItemTitle>FAQ</VListItemTitle>
            </VListItem>

            <!-- Divider -->
            <VDivider class="my-2" />

            <!-- 👉 Logout -->
            <VListItem to="/login">
              <template #prepend>
                <VIcon
                    class="me-2"
                    icon="mdi-logout"
                    size="22"
                />
              </template>

              <VListItemTitle>Logout</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
        <!-- !SECTION -->
      </VAvatar>
    </VBadge>
</template>

<script>

export default {
  name: "UserProfile",
  data() {
    return {
      avatar1 : 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/1.png?d79cbd6eda5ee96bfdfc8773ab6c1ee7'
    }
  },
}
</script>

<style scoped>

</style>