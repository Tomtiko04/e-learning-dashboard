<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
	<div class="container">
		<Sidebar />
		<RouterView />
	</div>
</template>

<style scoped>
.container {
	display: grid;
	grid-template-columns: 48px 1fr;
	column-gap: 4em;
}

@media (max-width: 768px) {
	.container {
		column-gap: 2em;
	}
}
</style>
