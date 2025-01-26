<template>
  <div class="nil_container relative">
    <banner id="banner"></banner>
    <div class="fixed-width">
      <about-us id="about_us"></about-us>
      <amenities id="ammetities"></amenities>
      <gallery id="gallery"></gallery>
      <places id="place_gallery"></places>
      <contact-us id="contact_us"></contact-us>
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
.nil_container {
  scroll-padding-top: 250px;
}
</style>
