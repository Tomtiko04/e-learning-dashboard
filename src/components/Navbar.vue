<!-- src/components/Navbar.vue -->
<template>
  <v-app-bar>
    <v-breadcrumbs
      v-if="breadcrumbs.length > 0"
      :items="breadcrumbs"
      class="custom-breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :disabled="item.disabled"
          :href="item.href"
          :title="item.title">
          {{ item.title }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCourseStore } from '@/stores/courses';

const route = useRoute();
const courseStore = useCourseStore();

const breadcrumbs = computed(() => {
  const path = route.path;
  const items = [{ title: 'Home', href: '/', disabled: false }];

  if (path.includes('/my-courses')) {
    items.push({ title: 'My Courses', href: '/my-courses', disabled: false });
  }

  if (path.includes('/my-course/') && courseStore.currentCourse) {
    items.push({
      title: courseStore.currentCourse.title,
      href: path,
      disabled: true
    });
  }

  return items;
});
</script>
