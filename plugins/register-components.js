import Vue from "vue";
import vClickOutside from "v-click-outside";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";

Vue.use(vClickOutside);
Vue.component("banner", Banner);
Vue.component("navbar", Navbar);
Vue.component("about-us", AboutUs);
