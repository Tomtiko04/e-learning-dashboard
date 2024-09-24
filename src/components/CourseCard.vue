<template>
  <v-card class="mx-auto course-card" max-width="400">
    <v-img :src="course.image" alt="Course image" class="course-image"></v-img>

    <v-card-title>
      <h4 class="course__title">{{ course.title }}</h4>
    </v-card-title>

    <v-card-text>
      <p class="course-description">{{ course.description }}</p>
      <v-chip class="rating" color="primary" dark>
        <span>{{ course.rating }}</span>
        <i class="bx bxs-star"></i>
      </v-chip>
      <div class="d-flex align-center mt-4 mb-4">
        <i class="bx bx-user user__icon"></i>
        <span class="instructor-name">{{ course.instructor.name }}</span>
      </div>
      <div>
        <v-progress-linear
          :model-value="course.progress"
          color="primary"
          height="5"
        ></v-progress-linear>
        <small>{{ course.progress }}% Complete</small>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn class="actionbtn" color="primary" block>
        <router-link :to="{ name: 'CourseDetail', params: { id: course.id } }">
          <p class="view-course-text" style="color: #1866c0">View Course</p>
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewCourseDetails() {},
  },
};
</script>

<style scoped>
.course-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

/* Image Styles */
.course-image {
  width: 100%;
  height: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

/* Title Styles */
.course__title {
  color: #1d1d1d;
  font-weight: 700;
}

/* Description Styles */
.course-description {
  font-size: 14px;
  color: #6b6b6b;
}

/* Instructor Name Styles */
.instructor-name {
  font-weight: 600;
}

/* Card Styles */
.v-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

/* Card Actions Styles */
.v-card-actions {
  padding-bottom: 16px;
}

/* Rating Chip Styles */
.rating {
  margin-top: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  width: 30%;
}

/* Rating Icon Styles */
.rating i {
  font-size: 18px;
  margin-left: 0.3em;
}

/* User Icon Styles */
.user__icon {
  font-size: 20px;
  color: #1866c0;
  margin-right: 0.5em;
}

/* Action Button Styles */
.actionbtn:hover {
  background: #1866c0 !important;
  color: #ffffff !important;
}
.actionbtn:hover p {
  color: #ffffff !important;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .course-card {
    max-width: 100%;
    margin: 0 1em;
  }

  .course-description {
    font-size: .75rem;
  }

  .rating {
    width: 30%;
  }

  .view-course-text {
    font-size: .875rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .course-card {
    max-width: 90%; 
  }

  .rating {
    width: 40%;
  }

  .view-course-text {
    font-size: 1rem;
  }
}
</style>

