<template>
	<v-alert title="" type="info" variant="tonal">
		{{ message }}
	</v-alert>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
