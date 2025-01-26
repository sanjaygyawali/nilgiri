<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h2
            class="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"
          >
            Visit Us Closer
          </h2>
          <h1
            class="mb-4 text-2xl font-bold tracking-tighter text-black md:text-5xl title-font"
          >
            Gallery
          </h1>
          <div class="flex my-4 justify-center">
            <div class="w-16 h-1 rounded-full bg-accent inline-flex"></div>
          </div>
          <p
            class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500"
          >
            Closer the better. View our place and service here.
          </p>
        </div>
        <VueEasyLightbox
          :visible="visibleRef"
          :imgs="galleryItems.map((item) => item.image)"
          :index="indexRef"
          @hide="onHide"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in galleryItems"
            :key="item.title"
            class="gallery-card group cursor-pointer"
          >
            <div
              @click="showImg(index)"
              class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            >
              <nuxt-img
                :alt="item.title"
                class="w-full h-64 md:h-80 object-cover object-center"
                :src="item.image"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
              ></div>
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-1">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600 line-clamp-2">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { galleryItems } from "~/store/contents";

const visibleRef = ref<boolean>(false);
const indexRef = ref(0);

const showImg = (index: number) => {
  console.log("fasdf");
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => {
  visibleRef.value = false;
};
</script>
