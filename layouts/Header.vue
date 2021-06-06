<template>
  <div>
    <div class="relative bg-white">
      <div class="mx-auto md:block sm:hidden">
        <div
          class="flex items-center border-b border-gray-400 py-2 md:space-x-10 px-12"
        >
          <div class="flex justify-start items-center md:space-x-10">
            <nuxt-link to="/">
              <span class="sr-only">Rasello</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="/images/rasellologo.png"
                alt
              />
            </nuxt-link>
            <div v-for="(menu, index) in menus" :key="index">
              <div>
                <nuxt-link :to="menu.to">
                  <span class="uppercase font-medium text-gray-700">{{
                    menu.title
                  }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="transition transform origin-top-right md:hidden">
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="p-3">
            <div class="flex items-center justify-between">
              <div>
                <nuxt-link to="/">
                  <img
                    class="h-8 w-auto"
                    src="/images/rasellologo.png"
                    alt="Rasello"
                  />
                </nuxt-link>
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500"
                  @click="closeMobileMenu"
                >
                  <span class="sr-only">Open menu</span>
                  <!-- Heroicon name: outline/menu -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6" v-if="showMobileMenu">
              <div v-for="(menu, index) in menus" :key="index">
                <drop-down
                  class="mb-6"
                  v-if="menu.submenus.length > 0"
                  :subMenus="menu.submenus"
                  v-bind="menu"
                ></drop-down>
                <nuxt-link v-else :to="menu.to">
                  <p class="mb-6 uppercase text-base">{{ menu.title }}</p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../components/DropDown";
import SubMenu from "../components/SubMenu";

export default {
  data() {
    return {
      isOpen: false,
      menus: [
        {
          id: 1,
          title: "Home",
          to: "platform"
        },

        {
          id: 2,
          title: "About Us",
          to: ""
        },
        {
          id: 3,
          title: "What we Offer",
          to: "/about"
        },
        {
          id: 4,
          title: "Contact Us",
          to: "/wallpapers"
        },

        {
          id: 4,
          title: "Get To Know More",
          to: ""
        }
      ],
      showMobileMenu: false
    };
  },
  components: {
    DropDown,
    SubMenu
  },
  methods: {
    closeMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>

<style></style>
