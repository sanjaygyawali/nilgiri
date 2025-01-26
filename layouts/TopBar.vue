<template>
  <div id="home" class="topbar bg-black py-2 text-white sticky top-0 z-50">
    <div class="container mx-auto flex text-xs">
      <a :href="`tel:${contactUs.landline.cta}`"
        >📞 {{ contactUs.landline.display }}</a
      >
      <a class="ml-4" :href="`tel:${contactUs.mobilePhone.cta}`"
        >📞 {{ contactUs.mobilePhone.display }}</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { contactUs } from "~/store/contents";
</script>
