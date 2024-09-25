import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCourseStore = defineStore("courses", () => {
	const isLoading = ref(false);
	const courses = ref([]);

	async function getAllCourses() {
		try {
			isLoading.value = true;
			const res = await axios.get("http://localhost:3000/courses");
			courses.value = res.data;
		} catch (error) {
			console.error("Failed to fetch courses:", error.message);
			throw new Error(error.message);
		} finally {
			isLoading.value = false;
		}
	}

	async function getCourse(id) {
		try {
			isLoading.value = true;
			const res = await axios.get(`http://localhost:3000/courses/${id}`);
			courses.value = [res.data];
		} catch (error) {
			console.error("Failed to fetch course:", error.message);
			throw new Error(error.message);
		} finally {
			isLoading.value = false;
		}
	}

	return { isLoading, courses, getAllCourses, getCourse };
});
