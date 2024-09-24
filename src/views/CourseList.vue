<template>
  <v-container fluid>
    <v-row justify="center">
      <!-- Title and Description -->
      <v-col cols="12" class="text-center">
        <div class="tag__name">
          <h1>Your Courses</h1>
          <div class="tag__line">
            <p>Keep track of the courses you are enrolled in and continue learning!</p>
          </div>
        </div>
        <br />
        <v-divider></v-divider>
      </v-col>

      <!-- Loading Spinner -->
      <LoadingSpinner v-if="isLoading" />

      <!-- Error Message -->
      <v-col cols="12" class="text-center" v-if="error">
        <ErrorMessage :message="error" />
      </v-col>

      <!-- Course Cards -->
      <v-col
        v-for="course in coursesData"
        :key="course.id"
        cols="12" sm="6" md="4" lg="3"
        class="d-flex"
      >
        <CourseCard :course="course" />
      </v-col>

      <!-- No Courses Message -->
      <v-col cols="12" class="text-center" v-if="!isLoading && !coursesData.length">
        <NotFound message="You are currently not enrolled in any courses." />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCourseStore } from "@/stores/courses";
import CourseCard from "@/components/CourseCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import NotFound from "@/components/NotFound.vue";

const store = useCourseStore();
const coursesData = computed(() => store.courses);
const isLoading = computed(() => store.isLoading);
const error = ref(null);

onMounted(async () => {
  try {
    await store.getAllCourses();
  } catch (err) {
    error.value = "Failed to load courses. Please try again later.";
  }
});
</script>

<style scoped>
/* Title and Description */
.tag__name {
  margin-top: 0.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tag__name h1 {
  margin-bottom: 0;
  color: #1867c0;
  font-size: 2.5em; 
}
.tag__line p {
  color: #828a96;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .tag__name h1 {
    font-size: 1.8em;
  }
  .tag__line p {
    font-size: 0.9em;
    text-align: center;
    margin: 0 1em;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .tag__name h1 {
    font-size: 2.2em;
  }
  .tag__line p {
    font-size: 1em;
  }
}
</style>
