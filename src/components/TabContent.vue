<!-- src/components/TabContent.vue -->
<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col :cols="12" :md="showRating ? 9 : 12">
          <p class="tab-content">{{ content }}</p>
        </v-col>
        <v-col v-if="showRating" cols="12" md="3">
          <ChapterRating
            v-model:rating="rating"
            v-bind="ratingProps"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import ChapterRating from './ChapterRating.vue';

const props = defineProps({
  content: String,
  showRating: Boolean,
  ratingProps: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['update:rating']);

const rating = ref(0);

const updateRating = (value) => {
  rating.value = value;
  emit('update:rating', value);
};
</script>