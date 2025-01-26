<template>
  <div class="items-center">
    <footer
      class="m-auto text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg"
    >
      <div class="w-full rounded-b-lg bg-blueGray-50">
        <div
          class="container flex flex-col items-center flex-wrap px-5 py-6 mx-auto sm:flex-row"
        >
          <nuxt-link href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <nuxt-img
              height="40"
              class="w-full"
              src="/images/nilgiri-logo.png"
            />
          </nuxt-link>
          <p class="text-sm text-center text-black sm:text-left">
            © {{ currentYear }}
          </p>
          <span
            class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
          >
            <Icon :size="32" name="lineicons:facebook-original" />
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
