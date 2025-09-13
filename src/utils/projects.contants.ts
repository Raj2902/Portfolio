export const projects = [
  {
    id: 1,
    title: "Shoppy Globe",
    subTitle: "E-Commerce Platform",
    dangerous: false,
    description:
      "This is an e-commerce platform that provides a seamless shopping experience. Users can browse through a comprehensive catalog of products, view detailed product information, and explore multiple product images through interactive carousels. The platform allows customers to easily add items to their cart, proceed to checkout, and complete their purchase with convenience.",
    image:
      "/assets/projects/shoppy-globe.png",
    techStack: ["Javascript", "React", "Tailwind"],
    category: "Frontend",
    demoLink: "https://shoppy-globe-dusky.vercel.app/",
    githubLink: "https://github.com/Raj2902/Shoppy_Globe",
  },
  {
    id: 2,
    title: "Todo App",
    dangerous: true,
    subTitle: "Task Management App",
    description:
      `
      <ul>
      <p>A <strong>TodoApp</strong> is a web or mobile application designed to help users effectively manage their daily tasks and stay organized. Its core functionalities include:</p>
      <li><strong>Data Storage</strong> - Securely storing tasks, ensuring they are accessible and persist across sessions.</li>
      <li><strong>User Interface</strong> - Providing a clean, intuitive, and responsive interface for easy task management.</li>
      <li><strong>User Interaction</strong> - Allowing users to create, update, mark as complete, and delete tasks seamlessly.</li>
      </ul>
      `,
    image:
      "/assets/projects/todo.png",
    techStack: ["Javascript", "MERN", "Git", "Github"],
    category: "Full-Stack",
    demoLink: "https://todo-app-frontend-kappa.vercel.app/",
    githubLink: "https://github.com/Raj2902/TodoApp_Frontend",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: `
    <section class="w-full max-w-3xl bg-white shadow-md rounded-2xl p-6 md:p-8">
  <header class="mb-4">
    <h2 class="text-2xl font-semibold text-gray-900">Weather App</h2>
    <p class="mt-1 text-sm text-gray-600">Accurate real-time weather and short-term forecasts with flexible selection methods and persistent search history.</p>
  </header>

  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-medium text-gray-800">Core Features</h3>
      <ul class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
        <li class="p-3 border rounded-lg bg-gray-50">
          <strong class="block text-sm text-gray-700">Search by City Name</strong>
          Retrieve current conditions and forecast for any city worldwide.
        </li>
        <li class="p-3 border rounded-lg bg-gray-50">
          <strong class="block text-sm text-gray-700">Map-Based Selection</strong>
          Click or tap a point on the interactive map to fetch weather for that location.
        </li>
        <li class="p-3 border rounded-lg bg-gray-50">
          <strong class="block text-sm text-gray-700">Current Location</strong>
          Use the browser/device geolocation API to show weather for the user's present position.
        </li>
        <li class="p-3 border rounded-lg bg-gray-50">
          <strong class="block text-sm text-gray-700">5-Day Forecast</strong>
          View daily summaries and hourly breakdowns (temperature, precipitation chance, wind).
        </li>
        <li class="p-3 border rounded-lg bg-gray-50">
          <strong class="block text-sm text-gray-700">Search History</strong>
          Persist recently searched cities locally for quick re-selection.
        </li>
        <li class="p-3 border rounded-lg bg-gray-50">
          <strong class="block text-sm text-gray-700">Map Marker</strong>
          Place and persist markers to highlight selected cities/locations on the map.
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-medium text-gray-800">User Experience</h3>
      <p class="mt-2 text-sm text-gray-600">
        Provide clear toggles for search methods (text, map, current location). Display a compact weather card for current conditions with an expandable 5-day timeline. Keep search history accessible via a dropdown or side panel and ensure keyboard and mobile accessibility.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-medium text-gray-800">Implementation Suggestions</h3>
      <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
        <div class="p-3 border rounded-lg bg-white">
          <strong class="block text-sm text-gray-700">Map</strong>
          Use Leaflet or Mapbox GL for interactive maps and marker management.
        </div>
        <div class="p-3 border rounded-lg bg-white">
          <strong class="block text-sm text-gray-700">Weather API</strong>
          Integrate OpenWeatherMap, Meteomatics, or Weatherbit for current and forecast data.
        </div>
        <div class="p-3 border rounded-lg bg-white">
          <strong class="block text-sm text-gray-700">Storage</strong>
          Persist history and marker data in LocalStorage or IndexedDB; optionally sync with backend.
        </div>
        <div class="p-3 border rounded-lg bg-white">
          <strong class="block text-sm text-gray-700">Frontend</strong>
          Build with React/Vue/Angular + Tailwind. Use the Geolocation API for current-location features.
        </div>
      </div>
    </div>

    <footer class="pt-4 border-t text-sm text-gray-500">
      <p>Optional enhancements: units toggle (°C/°F), offline caching of last-known data, push notifications for severe weather alerts, and user accounts for cross-device sync.</p>
    </footer>
  </div>
</section>
    `,
    image:
      "/assets/projects/weather_app.png",
    techStack: ["React", "Chart.js", "API Integration", "Tailwind"],
    category: "Frontend",
    demoLink: "https://data-visualization-frontend-beige.vercel.app/",
    githubLink: "https://github.com/Raj2902/data_visualization_frontend",
  },
  {
    id: 4,
    title: "YouTube Clone",
    description:
      "A full-featured YouTube clone demonstrating core video platform functionalities, including video listing, channel creation and management, user authentication (login/logout), video upload and deletion, commenting, and more.",
    image:
      "/assets/projects/ytClone.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full-Stack",
    demoLink: "https://yt-clone-frontend-beta.vercel.app/",
    githubLink: "https://github.com/Raj2902/ytClone_frontend",
  },
  {
    id: 5,
    title: "Data Visualization",
    description:
      "An assessment project focused on visualizing JSON data through interactive graphs in React. The task involved implementing data interactions, enabling comparisons, and supporting user-driven selections for deeper insights.",
    image:
      "/assets/projects/data-visuals.png",
    techStack: ["React", "chart.js", "tailwind"],
    category: "Frontend",
    demoLink: "https://data-visualization-frontend-beige.vercel.app/",
    githubLink: "https://github.com/Raj2902/data_visualization_frontend",
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "A blog dedicated to documenting my web development challenges and solutions. Alongside personal experiences, I share posts on specific topics that can help you overcome common problems, complete with code samples and practical solutions.",
    image:
      "/assets/projects/blg_web.png",
    techStack: ["React", "Tailwind", "Git", "GitHub"],
    category: "frontend",
    demoLink: "https://blgweb.vercel.app/",
    githubLink: "https://github.com/Raj2902/blog-website",
  },
];

export const categories = ["All", "Frontend", "Backend", "Full-Stack"];