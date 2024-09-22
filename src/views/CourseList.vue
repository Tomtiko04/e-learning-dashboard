<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <h1>Courses</h1>
      </v-col>
      <v-col cols="12" class="text-center" v-if="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p>Loading courses...</p>
      </v-col>
      <v-col
        v-for="course in courses"
        :key="course.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <CourseCard :course="course" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CourseCard from '@/components/CourseCard.vue';

export default {
  components: {
    CourseCard
  },
  setup() {
    const courses = ref([]);
    const loading = ref(true);

    // Fetch courses from the mock API when the component is mounted
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        courses.value = response.data;
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        loading.value = false;
      }
    };

    // Call fetchCourses when the component is mounted
    onMounted(() => {
      fetchCourses();
    });

    return {
      courses,
      loading
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
