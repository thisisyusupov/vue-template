<template>
	<div id="app">
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>

// import { VApp, VTabs, VTab } from 'vuetify/lib'

	export default ({
    // components: {
    //   VApp,
    //   VTabs,
    //   VTab
    // },
		computed: {
			// Sets components name based on current route's specified layout, defaults to
			// <layout-default></layout-default> component.
			layout() {
				return "layout-" + ( this.$route.meta.layout || "default" ).toLowerCase() ;
			}
		},
	})
	
</script>

<style lang="scss">
</style>