<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h2
          class="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"
        >
          Perfect Place to get lost in nature
        </h2>
        <h1
          class="mb-4 text-2xl font-bold tracking-tighter text-black md:text-5xl title-font"
        >
          Places to Explore
        </h1>
        <div class="flex my-4 justify-center">
          <div class="w-16 h-1 rounded-full bg-accent inline-flex"></div>
        </div>
        <p
          class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
        >
          With the calm and comfortable stay we offer you the beautiful nearby
          places where you can perfectly fit into nature.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="lg:w-1/4 md:w-1/2 p-4 w-full"
          v-for="(place, index) in places"
          :key="place.id"
        >
          <a class="block relative h-48 rounded overflow-hidden">
            <nuxt-img
              alt="ecommerce"
              class="cursor-pointer object-cover object-center w-full h-full block"
              :src="place.image"
              @click="() => showImg(index)"
            />
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
              {{ place.attraction }}
            </h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">
              {{ place.name }}
            </h2>
            <p class="mt-1">{{ place.distance }}</p>
          </div>
        </div>
      </div>
    </div>
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="places.map((item) => item.image)"
      :index="indexRef"
      @hide="onHide"
    />
  </section>
</template>

<script lang="ts" setup>
import { places } from "~/store/contents";

const visibleRef = ref<boolean>(false);
const indexRef = ref(0);

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => {
  visibleRef.value = false;
};
</script>