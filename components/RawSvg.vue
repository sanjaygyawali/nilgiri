<template>
  <div>
    {{ svgIcon }}
    <!-- <template v-bind="$attrs" v-html="svgIcon"></template> -->
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    svgIcon() {
      let res = require(`~/assets/svg/${this.icon}.svg?raw`);
      return res;
    }
  }
};
</script>

<style></style>
