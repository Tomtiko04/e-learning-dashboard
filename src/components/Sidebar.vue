<template>
	<!-- Sidebar -->
	<aside class="sidebar">
		<div class="sidebar__logo">
			<div class="sidebar__logo-image">
				<img src="../assets/images/logo.png" alt="Logo" />
			</div>
		</div>
		<nav class="sidebar__menu">
			<ul class="sidebar__menu-list">
				<li class="sidebar__menu-item">
					<RouterLink to="/" class="sidebar__link">
						<i class="bx bx-grid-alt sidebar__icon"></i>
						<v-tooltip activator="parent" location="end">Dashboard</v-tooltip>
					</RouterLink>
				</li>
				<li class="sidebar__menu-item">
					<RouterLink to="/my-courses" class="sidebar__link">
						<i class="bx bx-book sidebar__icon"></i>
						<v-tooltip activator="parent" location="end">Courses</v-tooltip>
					</RouterLink>
				</li>
				<li class="sidebar__menu-item">
					<RouterLink to="/calendar" class="sidebar__link">
						<i class="bx bx-calendar-minus sidebar__icon"></i>
						<v-tooltip activator="parent" location="end">Calendar</v-tooltip>
					</RouterLink>
				</li>
				<li class="sidebar__menu-item">
					<RouterLink to="/account" class="sidebar__link">
						<i class="bx bx-group sidebar__icon"></i>
						<v-tooltip activator="parent" location="end">Connect</v-tooltip>
					</RouterLink>
				</li>
				<li class="sidebar__menu-item">
					<RouterLink to="/analytics" class="sidebar__link">
						<i class="bx bx-bar-chart-alt-2 sidebar__icon"></i>
						<v-tooltip activator="parent" location="end">Analytics</v-tooltip>
					</RouterLink>
				</li>
				<li class="sidebar__menu-item">
					<RouterLink to="/messages" class="sidebar__link">
						<i class="bx bx-comment-minus sidebar__icon"></i>
						<v-tooltip activator="parent" location="end">Messages</v-tooltip>
					</RouterLink>
				</li>
			</ul>
			<div class="sidebar__settings">
				<RouterLink to="/settings" class="sidebar__link">
					<i class="bx bx-cog sidebar__icon"></i>
					<v-tooltip activator="parent" location="end">Settings</v-tooltip>
				</RouterLink>
			</div>
		</nav>
	</aside>
</template>

<style scoped>
/* Light Theme */
.sidebar {
	background-color: #ffffff;
	border-right: 1px solid #b1b8bd;
	padding: 2em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80px;
	position: relative;
}

.sidebar__logo {
	margin-bottom: 1.7rem;
}

.sidebar__logo-image {
	width: 48px;
}

.sidebar__logo-image img {
	width: 100%;
	height: 100%;
}

.sidebar__menu {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.sidebar__menu-list {
	padding: 0;
	list-style-type: none;
	width: 100%;
}

a.router-link-active {
	color: #4381f9;
	background-color: #f9f9f9;
	border-right: 2px solid #4381f9;
}
.sidebar__menu-item {
	margin-bottom: 0.6em;
}

.sidebar__link {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2em 0;
	color: #b1b8bd;
	transition: background 0.3s ease, color 0.3s ease;
}

.sidebar__link:hover {
	background-color: #f9f9f9;
	color: #4381f9;
}

.sidebar__link--active {
	color: #4381f9;
}

.sidebar__icon {
	font-size: 24px;
}

.sidebar__settings {
	margin-top: auto;
	padding-block-start: 2rem;
	/* padding-bottom: 1.5rem; */
	display: flex;
	justify-content: center;
	width: 100%;
}
</style>
