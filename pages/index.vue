<template>
  <div class="relative">
    <banner></banner>
    <div class="fixed-width">
      <about-us></about-us>
      <amenities></amenities>
      <places></places>
      <gallery></gallery>
      <contact-us></contact-us>
    </div>
  </div>
</template>

<script>
import ContactUs from "../components/ContactUs.vue";
export default {};
</script>

<style>
/* S
Gal
ContactUsleryample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
