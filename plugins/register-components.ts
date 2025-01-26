// import Vue from "vue";
// import vClickOutside from "v-click-outside";
// import Banner from "../components/Banner";
// import Navbar from "../components/Navbar";
// import AboutUs from "../components/AboutUs";
// import Amenities from "../components/Amenities";
// import Places from "../components/Places";
// import Gallery from "../components/Gallery";
// import ContactUs from "../components/ContactUs";
// import RawSvg from "../components/RawSvg";

// Vue.use(vClickOutside);
// Vue.component("banner", Banner);
// Vue.component("navbar", Navbar);
// Vue.component("about-us", AboutUs);
// Vue.component("amenities", Amenities);
// Vue.component("places", Places);
// Vue.component("gallery", Gallery);
// Vue.component("contact-us", ContactUs);
// Vue.component("raw-svg", RawSvg);

// export default defineNuxtPlugin(() => {})

import VueEasyLightbox from "vue-easy-lightbox";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueEasyLightbox);
});
