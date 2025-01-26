<template>
  <section class="sticky top-0 z-50 shadow-md" id="home">
    <TopBar></TopBar>
    <div class="bg-white">
      <div class="mx-auto">
        <div
          class="flex items-center justify-between border-gray-400 py-4 px-4 md:px-12"
        >
          <div>
            <nuxt-link to="/">
              <span class="sr-only">Hotel Nilgiri</span>
              <nuxt-img
                class="h-10 md:h-12 w-auto"
                src="/images/nilgiri-logo.png"
                alt="Hotel Nilgiri Logo"
              />
            </nuxt-link>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Desktop menu -->
          <div class="hidden md:flex md:items-center md:space-x-6">
            <div v-for="(menu, index) in menus" :key="index">
              <nuxt-link
                :to="menu.id"
                class="uppercase font-medium text-black hover:text-gray-600 transition-colors duration-200"
              >
                {{ menu.title }}
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="showMobileMenu" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <nuxt-link
                v-for="(menu, index) in menus"
                :key="index"
                :to="menu.id"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                @click="showMobileMenu = false"
              >
                {{ menu.title }}
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TopBar from "./TopBar.vue";

const menus = ref([
  { id: "#banner", title: "Home", to: "home" },
  { id: "#about_us", title: "About Us", to: "" },
  { id: "#ammetities", title: "Amenities", to: "/about" },
  { id: "#gallery", title: "Places to Explore", to: "/wallpapers" },
  { id: "#place_gallery", title: "Gallery", to: "" },
  { id: "#contact_us", title: "Contact Us", to: "" },
]);

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

onMounted(() => {
  // Add any necessary mounted logic here
});
</script>

<style lang="scss" scoped>
// Add any necessary styles here
</style>

