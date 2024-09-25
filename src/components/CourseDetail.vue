<template>
  <div v-if="isLoading">
    <LoadingSpinner />
  </div>
  <v-container fluid v-else-if="courseData">
    <v-row>
      <v-col cols="12" md="9" class="container border-e-thin">
        <div class="content">
          <v-breadcrumbs
            :items="courseData.breadcrumb"
            class="custom-breadcrumbs">
            <template v-for="(item, index) in courseData.breadcrumb" :key="index">
              <v-breadcrumbs-item
                :disabled="index === courseData.breadcrumb.length - 1"
                :href="index !== courseData.breadcrumb.length - 1 ? item.href : null">
                {{ item.text }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>

          <!-- Course Details -->
          <div class="d-flex justify-space-between align-center course-header">
            <h3 class="course__title">{{ courseData.title }}</h3>
            <div class="top-icon">
              <i class="bx bx-share-alt cursor-pointer" @click="handleShareCourse"></i>
              <i class="bx bx-bookmark-minus cursor-pointer" @click="handleBookmarkCourse"></i>
            </div>
          </div>

          <p class="instructor-name">{{ courseData.instructor.name }}</p>
          
          <v-responsive :aspect-ratio="16/9">
            <iframe
              width="100%"
              height="100%"
              :src="courseData.iframe.url"
              :title="courseData.iframe.title"
              frameborder="0"
              class="course-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
          </v-responsive>

          <!-- Tabs start -->
          <div class="tabs-section">
            <v-card flat>
              <v-tabs
                v-model="tab"
                color="#000000"
                class="border-b border-b-sm border-accent custom-tabs"
                grow
                slider-color="#0166FF">
                <v-tab
                  v-for="(tabItem, index) in courseData.tabs"
                  :key="index"
                  :text="tabItem.name"
                  :value="index">
                </v-tab>
              </v-tabs>

              <v-tabs-window v-model="tab">
                <v-tabs-window-item
                  v-for="(tabItem, index) in courseData.tabs"
                  :key="index"
                  :value="index">
                  <TabContent
                    :content="tabItem.content"
                    :showRating="index === 0"
                    :ratingProps="ratingProps"
                    @update:rating="updateRating"
                  />
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card>
          </div>
          <!-- Tabs ends -->
        </div>
      </v-col>

      <v-col cols="12" md="3" class="container sidebar">
        <div>
          <h4 class="about__title">About the course</h4>
          <div>
            <div class="about__instructor">
              <div class="instructor__image">
                <v-img class="image" :src="courseData.instructor.image" cover />
              </div>
              <div class="instructor__info">
                <h5>{{ courseData.instructor.name }}</h5>
                <p>{{ courseData.instructor.profession }}</p>
              </div>
            </div>
            <v-card-text class="about__text">
              <p>{{ truncatedText }}</p>
              <span v-if="isTruncated" class="read-more-link" @click="showDialog = true">read more</span>
            </v-card-text>

            <v-dialog v-model="showDialog" max-width="600px">
              <v-card flat class="elevation-3 rounded-lg" style="border-radius: 12px">
                <v-card-title class="text-h5 font-weight-bold d-flex justify-space-between dialog-title">
                  About the Course
                  <v-btn icon @click="showDialog = false" class="ml-2 close-btn">
                    <i class="bx bx-x"></i>
                  </v-btn>
                </v-card-title>
                <v-card-text class="dialog-content">
                  {{ aboutCourse }}
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>

          <!-- Course Completion -->
          <v-card flat class="course__progress">
            <v-card-title class="progress-title">Course Completion</v-card-title>
            <div class="progresss">
              <v-card-subtitle class="progress-subtitle">
                {{ courseProgress }}% Completed
              </v-card-subtitle>
              <div class="progress-topics">
                {{ completedTopics }}/{{ totalTopics }}
              </div>
            </div>

            <v-progress-linear
              :value="courseProgress"
              color="primary"
              height="2"
              class="progress-bar">
            </v-progress-linear>

            <!-- Syllabus List -->
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(item, index) in courseData.syllabus"
                  :key="index"
                  @click="toggleCompletion(index)"
                  class="clickable syllabus-item">
                  <div class="d-flex justify-space-between align-center syllabus-content">
                    <div class="d-flex align-center">
                      <span class="syllabus-number">
                        {{ (index + 1).toString().padStart(2, "0") }}.
                      </span>
                      <p :class="{ 'completed': item.completed }" class="syllabus-topic">
                        {{ item.topic }}
                      </p>
                    </div>
                    <div>
                      <i v-if="item.completed" class="bx bx-check completed-icon"></i>
                      <i v-else class="bx bx-lock-alt incomplete-icon"></i>
                    </div>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <NotFound v-else message="Course not found" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCourseStore } from "@/service/courses";
import { useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";
import TabContent from './TabContent.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import NotFound from './NotFound.vue';

const route = useRoute();
const store = useCourseStore();
const courseId = computed(() => route.params.id);
const $toast = useToast();

const isLoading = computed(() => store.isLoading);
const courseData = computed(() => (store.courses.length > 0 ? store.courses[0] : null));
const tab = ref(0);
const rating = ref(0);
const showDialog = ref(false);

const ratingProps = {
  maxRating: 5,
  size: 24,
  color: 'orange-lighten-1',
  title: 'Rate this chapter',
  subtitle: '(1 is disappointing, 5 is great)',
  defaultText: 'Rate this chapter',
  ratedText: 'You rated this chapter'
};

const aboutCourse = computed(() => courseData.value?.aboutcourse || '');
const wordLimit = ref(20);
const isTruncated = computed(() => aboutCourse.value.split(" ").length > wordLimit.value);
const truncatedText = computed(() => {
  const words = aboutCourse.value.split(" ");
  return isTruncated.value
    ? words.slice(0, wordLimit.value).join(" ") + "... "
    : aboutCourse.value;
});

const totalTopics = computed(() => courseData.value?.syllabus.length || 0);
const completedTopics = computed(() => courseData.value?.syllabus.filter(item => item.completed).length || 0);
const courseProgress = computed(() => Math.round((completedTopics.value / totalTopics.value) * 100));

const toggleCompletion = (index) => {
  const syllabusItem = courseData.value.syllabus[index];
  syllabusItem.completed = !syllabusItem.completed;
};

const updateRating = (value) => {
  rating.value = value;
  // You can add logic here to send the rating to an API
};

const handleShareCourse = () => {
  $toast.open({
    message: "Course shared successfully",
    type: "success",
    position: "top-right",
  });
};

const handleBookmarkCourse = () => {
  $toast.open({
    message: "Course bookmarked successfully",
    type: "success",
    position: "top-right",
  });
};

onMounted(() => {
  store.getCourse(courseId.value);
});
</script>

<style scoped>
.container {
  padding-block-start: 2.6em;
}
.content {
  padding-right: 2rem;
}
.clickable {
  cursor: pointer;
}
.course__title {
  font-size: 1.6rem;
}
.top-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  column-gap: 0.6rem;
}
.top-icon i {
  font-size: 20px;
  border: 1px solid #b1b8bd;
  padding: 0.4em;
  border-radius: 100%;
}
.top-icon i:hover {
  background: #4381f9;
  transition: background 0.3s ease, color 0.3s ease;
  color: #ffffff;
}
.instructor-name {
  margin-top: 0.3em;
  font-weight: 500;
  color: #828a96;
}
.sidebar {
  padding-left: 1.5em;
}
.about__title {
  font-size: 1.2rem;
  font-weight: 600;
}
.about__instructor {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-block-start: 1em;
}
.about__instructor .instructor__image {
  flex-shrink: 0;
  width: 2.3rem;
  height: 2.3rem;
}
.about__instructor .instructor__image .image {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.about__instructor .instructor__info {
  flex-grow: 1;
}
.about__instructor h5 {
  font-weight: 600;
  margin: 0;
}
.about__instructor p {
  font-size: 0.85rem;
  color: #828a96;
  margin-top: 0.3em;
  margin-bottom: 0;
}
.about__text {
  padding: 0;
}
.about__text p {
  color: #828a96;
  font-weight: 500;
  margin-top: 1.5em;
  font-size: 1em;
}
.about__text span {
  color: #1d1d1d;
  font-weight: 600;
  cursor: pointer;
}
.course__progress {
  padding-block-start: 3em;
}
.progresss {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}
.course-video {
  border-radius: 5px;
  margin-top: 1.5em;
}
.tabs-section {
  margin-top: 1.5em;
}
.close-btn i {
  font-size: 24px;
}
.syllabus-content {
  width: 100%;
}
.completed {
  text-decoration: line-through;
  color: #828282;
}
.completed-icon {
  color: green;
  font-size: 20px;
}
.incomplete-icon {
  color: grey;
  font-size: 20px;
}

@media (max-width: 960px) {
  .content {
    padding-right: 0;
  }
  .sidebar {
    padding-left: 0;
  }
}

@media (max-width: 600px) {
  .container {
    padding-block-start: 1.5em;
  }
  .course__title {
    font-size: 1.3rem;
  }
  .about__title {
    font-size: 1rem;
  }
  .about__text p {
    font-size: 0.9em;
  }
  .custom-breadcrumbs {
    font-size: 0.8rem;
  }
  .course-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .top-icon {
    margin-top: 1em;
  }
  .custom-tabs {
    height: auto;
  }
  .dialog-title {
    font-size: 1.2rem;
  }
  .dialog-content {
    font-size: 0.9rem;
  }
  .progress-title {
    font-size: 1.1rem;
  }
  .progress-subtitle, .progress-topics {
    font-size: 0.8rem;
  }
  .syllabus-item {
    padding: 0.5em 0;
  }
  .syllabus-number {
    font-size: 0.8rem;
  }
  .syllabus-topic {
    font-size: 0.9rem;
  }
}
</style>