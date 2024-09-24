import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue"

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/my-courses",
		name: "Course",
		component: () => import("../views/CourseList.vue"),
	},
	{
		path: "/my-course/:id",
		name: "CourseDetail",
		component: () => import("../views/CourseDetail.vue"),
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
