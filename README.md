# E-Learning-Dashboard Platform

This project is an e-learning-dashboard platform built with Vue.js, featuring course listings, detailed course views, progress tracking, and a rating system for course chapters.

## Table of Contents
1. [Introduction](#e-learning-dashboard-platform)
2. [Technology Stack](#technology-stack)
3. [Project Setup](#project-setup)
4. [Running the Mock API](#running-the-mock-api)
5. [Build for Production](#build-for-production)
6. [Implementation Notes](#implementation-notes)
7. [Project Structure](#project-structure)
8. [Key Components](#key-components)
   - [CourseDetail.vue](#coursedetailvue)
   - [CourseList.vue](#courselistvue)
9. [State Management](#state-management)
   - [Course Store](#course-store)
10. [Routing](#routing)
11. [API Integration](#api-integration)
   - [API Endpoints](#api-endpoints)
12. [Styling](#styling)
   - [Breakpoints](#breakpoints)
13. [Third-party Integrations](#third-party-integrations)
14. [Environment Variables](#environment-variables)
15. [Performance Optimization](#performance-optimization)
16. [Accessibility](#accessibility)
17. [Error Handling](#error-handling)
18. [Security Considerations](#security-considerations)
19. [Troubleshooting](#troubleshooting)
20. [Contributing](#contributing)
21. [Version Control](#version-control)
22. [Code Style and Linting](#code-style-and-linting)
23. [Future Enhancements](#future-enhancements)
24. [Full Documentation](#full-documentation)
25. [License](#license)


## Technology Stack

- Frontend: Vue.js 3, Vuetify 3
- State Management: Pinia
- Routing: Vue Router
- HTTP Client: Axios
- Mock Backend: JSON Server
- Build Tool: Vite
- Additional Libraries: vue-toast-notification, Boxicons

## Project Setup

1. Clone the repository:
   ```
   git clone [Github](https://github.com/Tomtiko04/e-learning-dashboard.git)
   
   cd e-learning-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the JSON Server (mock API):
   ```
   json-server --watch db.json --port 3000
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port Vite is using)

## Running the Mock API

This project uses JSON Server to simulate a backend API. The mock data is stored in `db.json` in the project root.

To start the JSON Server: json-server --watch db.json --port 3000

The API will be available at `http://localhost:3000`.

## Build for Production

To build the project for production:

## Implementation Notes

- The application uses Vuetify for UI components and layout.
- State management is handled by Pinia, with the main store in `src/stores/courses.js`.
- Routing is managed by Vue Router, with route definitions in `src/router/index.js`.
- The `CourseDetail.vue` component is the main view for individual courses, handling course information display, progress tracking, and chapter ratings.
- Boxicons are used for icons throughout the application.
- Toast notifications are implemented using vue-toast-notification.
- The application is responsive, with specific styles for mobile, tablet, and desktop views.

## Project Structure
src/
├── assets/
├── components/
│ ├── ChapterRating.vue
│ ├── CourseCard.vue
│ ├── ErrorMessage.vue
│ ├── LoadingSpinner.vue
│ ├── Navbar.vue
│ ├── NotFound.vue
│ ├── Sidebar.vue
│ └── TabContent.vue
├── views/
│ ├── Dashboard.vue
│ ├── CourseList.vue
│ └── CourseDetail.vue
├── router/
│ └── index.js
├── stores/
│ └── courses.js
├── services/
├── App.vue
└── main.js


## Key Components

### CourseDetail.vue
Main component for displaying individual course details.
- Features: Course information, video player, tabs for content, rating system, course progress tracking

### CourseList.vue
Displays a list of available courses.

## State Management

Using Pinia for state management. The main store is `courses.js`.

### Course Store
- State: 
  - `courses`: Array of course objects
  - `isLoading`: Boolean for loading state
- Actions:
  - `getCourse(id)`: Fetches a specific course by ID
  - `getCourses()`: Fetches all courses

## Routing

Vue Router is used for navigation. Main routes:
- `/`: Dashboard
- `/my-courses`: Course List
- `/my-course/:id`: Course Detail

## API Integration

Using Axios for API calls to the JSON Server backend.

### API Endpoints

- GET `/api/courses`: Fetch all courses
- GET `/api/courses/:id`: Fetch a specific course

## Styling

- Global styles defined in assest `main.css`
- Using Vuetify components for consistent UI
- Custom CSS for specific component styling
- Responsive design implemented for mobile and tablet views

### Breakpoints
- Mobile: < 600px
- Tablet: 600px - 960px
- Desktop: > 960px

## Third-party Integrations

- Boxicons for icons
  - Usage: `<i class="bx bx-icon-name"></i>`
- vue-toast-notification for toast messages
  - Usage: `$toast.open({ message: "Message", type: "success" })`

## Environment Variables

## Performance Optimization

- Lazy loading of routes
- Use of computed properties for derived state
- Proper use of v-for with :key for list rendering

## Accessibility

- Ensure proper use of ARIA attributes
- Maintain good color contrast

## Error Handling

- Use of try-catch blocks in async operations
- ErrorMessage component for displaying errors

## Security Considerations

- Use HTTPS in production

## Troubleshooting

Common issues and their solutions:
- JSON Server not starting: Ensure port 3000 is free
- API calls failing: Check if JSON Server is running and URL is correct
- Vuetify components not rendering: Ensure Vuetify is properly installed and imported

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## Version Control

- Use of Git for version control
- Branch naming convention: feature/feature-name, bugfix/bug-name

## Code Style and Linting

- ESLint configuration
- Prettier for code formatting
- Run `npm run lint` to check for linting errors

## Future Enhancements

- Implement user authentication
- Add search functionality for courses
- Integrate with a real backend API
- Implement unit and integration tests

## Full Documentation: [Full Documentation](https://www.notion.so/E-Learning-Platform-Documentation-10bfe11f2d1380eb82f2f20d2c50bbf0?pvs=4)

## License

[MIT License](LICENSE)
