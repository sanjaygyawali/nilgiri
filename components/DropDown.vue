<template>
  <div>
    <div class="relative">
      <button
        type="button"
        class="text-gray-700 uppercase group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-secondary focus:outline-none sm:w-full"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-click-outside="onClickOutside"
      >
        <span>{{ title }}</span>

        <svg
          class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 sm:float-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="gray-700"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <transition
        enter-active-class="transition ease-out duration-100 "
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div
          v-show="isOpen"
          class="absolute md:absolute sm:relative z-10 -ml-4 mt-3 transform w-screen max-w-sm sm:px-0 lg:ml-0"
        >
          <div
            class="rounded-lg sm:shadow-none md:shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="relative bg-white py-2 sm:gap-6 sm:py-2">
              <sub-menu
                v-for="(menu, index) in subMenus"
                :key="index"
                v-bind="menu"
              ></sub-menu>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subMenus: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },

  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    onClickOutside(event) {
      this.isOpen = false;
    }
  }
};
</script>

<style></style>
