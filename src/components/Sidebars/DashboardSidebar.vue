<template>

	<!-- Main Sidebar -->
	<a-layout-sider
		collapsible
		class="sider-primary"
		breakpoint="lg"
		collapsed-width="0"
		width="250px"
		:collapsed="sidebarCollapsed"
		@collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
		:trigger="null"
		:class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
		theme="light"
		:style="{ backgroundColor: 'transparent',}">
			<div class="brand"><img src="images/logo-ct-black.png" alt=""> <span>Muse Dashboard</span></div>
			<hr>

			<!-- Sidebar Navigation Menu -->
			<a-menu theme="light" mode="inline">
				<a-menu-item>
					<router-link to="/dashboard">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Dashboard</span>
					</router-link>
				</a-menu-item>
				<a-menu-item>
					<router-link to="/selling">
						<span class="icon">
							<svg style="margin-top: 10px" height="35" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 40" x="0px" y="0px">
                <path d="M16,22c.55,0,1,.45,1,1s-.45,1-1,1c-.42,0-.81-.28-.94-.68-.17-.52-.74-.81-1.26-.64-.52,.17-.81,.74-.64,1.26,.3,.9,.99,1.58,1.84,1.88v.18c0,.55,.45,1,1,1s1-.45,1-1v-.18c1.16-.41,2-1.51,2-2.82,0-1.65-1.35-3-3-3-.55,0-1-.45-1-1s.45-1,1-1c.42,0,.81,.28,.94,.68,.17,.52,.74,.81,1.26,.64,.52-.17,.81-.74,.64-1.26-.3-.9-.99-1.58-1.84-1.88v-.18c0-.55-.45-1-1-1s-1,.45-1,1v.18c-1.16,.41-2,1.51-2,2.82,0,1.65,1.35,3,3,3Z"/>
                <path d="M16,30c4.96,0,9-4.04,9-9s-4.04-9-9-9-9,4.04-9,9,4.04,9,9,9Zm0-16c3.86,0,7,3.14,7,7s-3.14,7-7,7-7-3.14-7-7,3.14-7,7-7Z"/><path d="M16,11c.55,0,1-.45,1-1V5.41l1.29,1.29c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41l-3-3c-.09-.09-.2-.17-.33-.22-.24-.1-.52-.1-.76,0-.12,.05-.23,.12-.33,.22l-3,3c-.39,.39-.39,1.02,0,1.41s1.02,.39,1.41,0l1.29-1.29v4.59c0,.55,.45,1,1,1Z"/><path d="M26,14v-5.59l1.29,1.29c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41l-3-3c-.09-.09-.2-.17-.33-.22-.24-.1-.52-.1-.76,0-.12,.05-.23,.12-.33,.22l-3,3c-.39,.39-.39,1.02,0,1.41s1.02,.39,1.41,0l1.29-1.29v5.59c0,.55,.45,1,1,1s1-.45,1-1Z"/>
                <path d="M7,15c.55,0,1-.45,1-1v-5.59l1.29,1.29c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41l-3-3c-.09-.09-.2-.17-.33-.22-.24-.1-.52-.1-.76,0-.12,.05-.23,.12-.33,.22l-3,3c-.39,.39-.39,1.02,0,1.41s1.02,.39,1.41,0l1.29-1.29v5.59c0,.55,.45,1,1,1Z"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Idwar</text>
                <text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
						</span>
						<span class="label">Selling</span>
					</router-link>
				</a-menu-item>
        <a-menu-item>
					<router-link to="/report">
						<span class="icon">
              <svg height="30"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/><g i:extraneous="self"><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/>
                <path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/>
                <path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/></g><g><path d="M30.9,64.6c0.5,0,1.1-0.2,1.5-0.6l12.2-12.2l5,5c0.8,0.8,2.1,0.8,2.9,0l12.3-12.3v3.9c0,1.1,0.9,2.1,2.1,2.1     c1.1,0,2.1-0.9,2.1-2.1v-8.9c0-1.1-0.9-2.1-2.1-2.1h-8.9c-1.1,0-2.1,0.9-2.1,2.1c0,1.1,0.9,2.1,2.1,2.1h3.9L51.1,52.5l-5-5     c-0.8-0.8-2.2-0.8-2.9,0L29.4,61.1c-0.8,0.8-0.8,2.1,0,2.9C29.9,64.4,30.4,64.6,30.9,64.6z"/><path d="M30.2,81h4.9c0.9,0,1.6-0.7,1.6-1.6v-6.7c0-0.9-0.7-1.6-1.6-1.6h-4.9c-0.9,0-1.6,0.7-1.6,1.6v6.7     C28.7,80.3,29.4,81,30.2,81z"/><path d="M41.8,66c-0.9,0-1.6,0.7-1.6,1.6v11.9c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V67.6c0-0.9-0.7-1.6-1.6-1.6H41.8     z"/>
                <path d="M53.3,60.8c-0.9,0-1.6,0.7-1.6,1.6v17.1c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V62.4c0-0.9-0.7-1.6-1.6-1.6     H53.3z"/>
                <path d="M64.9,55.6c-0.9,0-1.6,0.7-1.6,1.6v22.3c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V57.2c0-0.9-0.7-1.6-1.6-1.6     H64.9z"/>
                <path d="M79.6,20.2h-4.2v6.7h4.2c1.9,0,3.4,1.5,3.4,3.4v57.1c0,1.9-1.5,3.4-3.4,3.4H20.4c-1.9,0-3.4-1.5-3.4-3.4V30.3     c0-1.9,1.5-3.4,3.4-3.4h3.8v-6.7h-3.8c-5.6,0-10.1,4.5-10.1,10.1v57.1c0,5.6,4.5,10.1,10.1,10.1h59.1c5.6,0,10.1-4.5,10.1-10.1     V30.3C89.7,24.7,85.1,20.2,79.6,20.2z"/><path d="M31.8,29.2h35.9c1.4,0,2.5-1.1,2.5-2.5V16.5c0-1.4-1.1-2.5-2.5-2.5h-5.9c-0.3-6.4-5.5-11.5-12-11.5     c-6.5,0-11.7,5.1-12,11.5h-5.9c-1.4,0-2.5,1.1-2.5,2.5v10.2C29.3,28.1,30.5,29.2,31.8,29.2z M49.8,10c2.5,0,4.6,2.1,4.6,4.6     c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.6-2.1-4.6-4.6C45.2,12,47.3,10,49.8,10z"/></g></g></switch><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text></svg>
              </span>
						<span class="label">Report</span>
					</router-link>
				</a-menu-item>
        <a-menu-item>
					<router-link to="/account">
						<span class="icon">
              <svg height="30"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/><g i:extraneous="self"><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/>
                <path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/>
                <path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/></g><g><path d="M30.9,64.6c0.5,0,1.1-0.2,1.5-0.6l12.2-12.2l5,5c0.8,0.8,2.1,0.8,2.9,0l12.3-12.3v3.9c0,1.1,0.9,2.1,2.1,2.1     c1.1,0,2.1-0.9,2.1-2.1v-8.9c0-1.1-0.9-2.1-2.1-2.1h-8.9c-1.1,0-2.1,0.9-2.1,2.1c0,1.1,0.9,2.1,2.1,2.1h3.9L51.1,52.5l-5-5     c-0.8-0.8-2.2-0.8-2.9,0L29.4,61.1c-0.8,0.8-0.8,2.1,0,2.9C29.9,64.4,30.4,64.6,30.9,64.6z"/><path d="M30.2,81h4.9c0.9,0,1.6-0.7,1.6-1.6v-6.7c0-0.9-0.7-1.6-1.6-1.6h-4.9c-0.9,0-1.6,0.7-1.6,1.6v6.7     C28.7,80.3,29.4,81,30.2,81z"/><path d="M41.8,66c-0.9,0-1.6,0.7-1.6,1.6v11.9c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V67.6c0-0.9-0.7-1.6-1.6-1.6H41.8     z"/>
                <path d="M53.3,60.8c-0.9,0-1.6,0.7-1.6,1.6v17.1c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V62.4c0-0.9-0.7-1.6-1.6-1.6     H53.3z"/>
                <path d="M64.9,55.6c-0.9,0-1.6,0.7-1.6,1.6v22.3c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V57.2c0-0.9-0.7-1.6-1.6-1.6     H64.9z"/>
                <path d="M79.6,20.2h-4.2v6.7h4.2c1.9,0,3.4,1.5,3.4,3.4v57.1c0,1.9-1.5,3.4-3.4,3.4H20.4c-1.9,0-3.4-1.5-3.4-3.4V30.3     c0-1.9,1.5-3.4,3.4-3.4h3.8v-6.7h-3.8c-5.6,0-10.1,4.5-10.1,10.1v57.1c0,5.6,4.5,10.1,10.1,10.1h59.1c5.6,0,10.1-4.5,10.1-10.1     V30.3C89.7,24.7,85.1,20.2,79.6,20.2z"/><path d="M31.8,29.2h35.9c1.4,0,2.5-1.1,2.5-2.5V16.5c0-1.4-1.1-2.5-2.5-2.5h-5.9c-0.3-6.4-5.5-11.5-12-11.5     c-6.5,0-11.7,5.1-12,11.5h-5.9c-1.4,0-2.5,1.1-2.5,2.5v10.2C29.3,28.1,30.5,29.2,31.8,29.2z M49.8,10c2.5,0,4.6,2.1,4.6,4.6     c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.6-2.1-4.6-4.6C45.2,12,47.3,10,49.8,10z"/></g></g></switch><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></text></svg>
              </span>
						<span class="label">Account</span>
					</router-link>
				</a-menu-item>
        <a-menu-item>
					<router-link to="/tables">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z" fill="#111827"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Tables</span>
					</router-link>
				</a-menu-item>
				<a-menu-item>
					<router-link to="/billing">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z" fill="#111827"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Billing</span>
					</router-link>
				</a-menu-item>
				<a-menu-item>
					<router-link to="/rtl">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">RTL</span>
					</router-link>
				</a-menu-item>
				<a-menu-item class="menu-item-header">
					Account Pages
				</a-menu-item>
				<a-menu-item>
					<router-link to="/profile">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Profile</span>
					</router-link>
				</a-menu-item>
				<a-menu-item>
					<router-link to="/sign-in">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Sign In</span>
					</router-link>
				</a-menu-item>
				<a-menu-item>
					<router-link to="/sign-up">
						<span class="icon">
							<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<title>duplicate</title>
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Tables" transform="translate(-58.000000, -507.000000)" fill="#BFBFBF" fill-rule="nonzero">
										<g id="sidebar" transform="translate(33.000000, 43.000000)">
											<g id="sign-up" transform="translate(16.000000, 455.000000)">
												<g id="duplicate" transform="translate(9.000000, 9.000000)">
													<path d="M4,6 C4,4.89543 4.89543,4 6,4 L12,4 C13.1046,4 14,4.89543 14,6 L14,12 C14,13.1046 13.1046,14 12,14 L6,14 C4.89543,14 4,13.1046 4,12 L4,6 Z" id="Path"></path>
													<path d="M2,0 C0.89543,0 0,0.89543 0,2 L0,8 C0,9.1046 0.89543,10 2,10 L2,4 C2,2.8954305 2.8954305,2 4,2 L10,2 L10,2 C10,0.89543 9.1046,0 8,0 L2,0 Z" id="Path"></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</span>
						<span class="label">Sign Up</span>
					</router-link>
				</a-menu-item>
			</a-menu>
			<!-- / Sidebar Navigation Menu -->

			<!-- Sidebar Footer -->
<!--			<div class="aside-footer">-->
<!--				<div class="footer-box">-->
<!--					<span class="icon">-->
<!--						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--							<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>-->
<!--							<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>-->
<!--							<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>-->
<!--						</svg>-->
<!--					</span>-->
<!--					<h6>Need Help?</h6>-->
<!--					<p>Please check our docs</p>-->
<!--					<a-button type="primary" href="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/documentation" block target="_blank">-->
<!--						DOCUMENTATION-->
<!--					</a-button>-->
<!--				</div>-->
<!--			</div>-->
			<!-- / Sidebar Footer -->

<!--			<a-button type="primary" href="https://www.creative-tim.com/product/muse-vue-ant-design-dashboard-pro" block target="_blank">-->
<!--				UPGRADE TO PRO-->
<!--			</a-button>-->
<!---->
	</a-layout-sider>
	<!-- / Main Sidebar -->

</template>

<script>

	export default ({
		props: {
			// Sidebar collapsed status.
			sidebarCollapsed: {
				type: Boolean,
				default: false,
			},

			// Main sidebar color.
			sidebarColor: {
				type: String,
				default: "primary",
			},

			// Main sidebar theme : light, white, dark.
			sidebarTheme: {
				type: String,
				default: "light",
			},
		},
		data() {
			return {
				// sidebarCollapsedModel: this.sidebarCollapsed,
			}
		},
	})

</script>
