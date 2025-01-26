<template>
  <div class="relative">
    <div class="banner">
      <div class="main-logo flex items-center justify-center flex-col">
        <div>
          <nuxt-img src="/images/logo.png" alt="Logo" />
        </div>
        <div
          class="mt-8 animate-bounce bg-white text-black py-3 px-6 rounded-full flex items-center cursor-pointer hover:bg-opacity-90 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
          <a :href="`tel:${contactUs.landline.cta}`">
            {{ contactUs.landline.display }}
            <br />
            <span>Quick Call</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { contactUs } from "~/store/contents";
</script>



<style lang="scss">
.banner {
  height: calc(100vh - 150px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top; // Changed from 'bottom' to 'center'
  background-image: linear-gradient(
      to bottom,
      rgba(5, 87, 119, 0.85),
      rgba(165, 53, 137, 0)
    ),
    url("/images/gallery/nilgiri-front.jpg");
}

.main-logo {
  width: 100%;
  text-align: center;
  height: calc(100vh - 100px);
  img {
    width: 300px;
    margin: 0 auto;
  }
}
</style>