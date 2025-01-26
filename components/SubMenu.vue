<template>
  <div class>
    <nuxt-link
      :to="to"
      class="p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <slot>
        <div class="ml-4">
          <p class="text-base uppercase font-medium text-gray-700">
            {{ title }}
          </p>
          <p class="mt-1 text-sm text-gray-500" v-if="description">
            {{ description }}
          </p>
        </div>
      </slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    }
  }
};
</script>

<style></style>
