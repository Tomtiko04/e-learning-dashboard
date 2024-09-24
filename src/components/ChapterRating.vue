<!-- src/components/ChapterRating.vue -->
<template>
  <div class="rating-box">
    <h4>{{ title }}</h4>
    <p>{{ subtitle }}</p>
    <div>
      <v-rating
        v-model="localRating"
        hover
        :length="maxRating"
        :size="size"
        :color="color"
        class="rating-star"
        @update:model-value="updateRating"
      />
      <p v-if="localRating === 0" class="text-center">{{ defaultText }}</p>
      <p v-else>{{ ratedText }} {{ localRating }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    default: 0
  },
  maxRating: {
    type: Number,
    default: 5
  },
  size: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: 'orange-lighten-1'
  },
  title: {
    type: String,
    default: 'Give this chapter a star'
  },
  subtitle: {
    type: String,
    default: '(1 is disappointing, 5 is great)'
  },
  defaultText: {
    type: String,
    default: 'Rate this chapter'
  },
  ratedText: {
    type: String,
    default: 'You rated this chapter'
  }
});

const emit = defineEmits(['update:rating']);

const localRating = ref(props.rating);

watch(() => props.rating, (newRating) => {
  localRating.value = newRating;
});

const updateRating = (value) => {
  localRating.value = value;
  emit('update:rating', value);
};
</script>