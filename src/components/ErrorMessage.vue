<!-- ErrorMessage.vue -->
<template>
  <v-alert type="error" dismissible>
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

