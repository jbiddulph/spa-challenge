<template>
  <div
    :class="[
      showSidebar
        ? 'flex flex-col w-12 h-12 fixed'
        : 'flex flex-col w-12 h-12 fixed',
    ]"
  >
    <button @click="showMenu()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </button>
    <div
      :class="[
        showSidebar
          ? 'bg-gray-700 text-gray-100 space-y-6 px-2 py-4 min-h-screen md:-translate-x-0 transform transition duration-200 ease-in-out -translate-x-0 w-64 fixed top-12'
          : 'bg-gray-700 text-gray-100 space-y-6 px-2 py-4 h-10 md:w-0 transform -translate-x-full w-0 hidden',
      ]"
    >
      <div class="transition duration-200 ease-in-out">
        <a href="#" class="flex items-center space-x-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
          <span class="text-2xl font-extrabold text-white">jbiddulph</span>
        </a>
        <NavBar />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "SideBar",
  components: {
    NavBar,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    showMenu() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
