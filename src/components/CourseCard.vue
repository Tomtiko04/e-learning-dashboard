<template>
  <v-card class="mx-auto my-4" max-width="400">
    <v-img
      :src="course.image"
      alt="Course image"
      height="200px"
    ></v-img>

    <v-card-subtitle class="d-flex justify-space-between align-center">
      <span>{{ course.title }}</span>
      <v-chip color="primary" dark>{{ course.rating }} ★</v-chip>
    </v-card-subtitle>

    <v-card-text>
      <p class="course-description">
        {{ course.description }}
      </p>
      <div class="d-flex justify-space-between align-center mt-2">
        <div>
          <v-icon color="primary" left>mdi-account-circle</v-icon>
          <span class="instructor-name">{{ course.instructor }}</span>
        </div>
        <div>
          <v-progress-linear
            :value="course.progress"
            color="primary"
            height="10"
          ></v-progress-linear>
          <small>{{ course.progress }}% Complete</small>
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" block @click="viewCourseDetails">View Course</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewCourseDetails() {
      // Add logic to view the detailed page of the course
      alert(`Navigating to course: ${this.course.title}`);
    }
  }
};
</script>

<style scoped>
.course-description {
  font-size: 14px;
  color: #6b6b6b;
}

.instructor-name {
  font-weight: bold;
}

.v-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.v-card-actions {
  padding-bottom: 16px;
}
</style>
