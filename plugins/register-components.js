import Vue from "vue";
import vClickOutside from "v-click-outside";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Amenities from "../components/Amenities";
import Places from "../components/Places";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";

Vue.use(vClickOutside);
Vue.component("banner", Banner);
Vue.component("navbar", Navbar);
Vue.component("about-us", AboutUs);
Vue.component("amenities", Amenities);
Vue.component("places", Places);
Vue.component("gallery", Gallery);
Vue.component("contact-us", ContactUs);
