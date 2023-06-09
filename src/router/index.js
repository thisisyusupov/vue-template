import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/home',
		name: 'Home',
		redirect: '/dashboard',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/account',
		name: 'Account',
		layout: "dashboard",
		component: () => import('../views/AccountSettings.vue'),
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		component: () => import('../views/Tables.vue'),
	},
	{
		path: '/selling',
		name: 'Selling',
		layout: "dashboard",
		component: () => import('../views/selling/Sellling.vue'),
	},
	{
		path: '/report',
		name: 'Report',
		layout: "dashboard",
		component: () => import('../views/Report.vue'),
	},
	{
		path: '/selling/add',
		name: 'SellingAdd',
		layout: "dashboard",
		component: () => import('../views/selling/SellingAdd.vue'),
	},
	{
		path: '/billing',
		name: 'Billing',
		layout: "dashboard",
		component: () => import('../views/Billing.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/admin-panel',
		name: 'Admin Panel',
		layout: "dashboard",
		component: () => import('../views/admin-panel/AdminPanel.vue'),
	},
	{
		path: '/admin-panel/add',
		name: 'Admin Panel',
		layout: "dashboard",
		component: () => import('../views/admin-panel/AdminPanelAdd.vue'),
	},
	{
		path: '/',
		name: 'Sign-In',
		component: () => import('../views/Sign-In.vue'),
	},,
	{
		path: '/account/home',
		name: 'Home',
		layout: 'dashboard',
		component: () => import('../views/account/AccountSettingsAccount'),
	},
	{
		path: '/account/profile',
		name: 'Security',
		layout: "dashboard",
		component: () => import('../views/account/AccountSettingsSecurity'),
	},
	{
		path: '/account/permission',
		name: 'Security',
		layout: "dashboard",
		component: () => import('../views/account/AccountSettingsNotification'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import('../views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;

	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
