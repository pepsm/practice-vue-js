<template>
    <component :is="layout">
      <router-view />
    </component>
</template>

<script>
import Vue from "vue";

const defaultLayout = "default";

export default Vue.extend({
  name: "App",

  computed: {
    layout() {
      return this.$route.meta.layout || defaultLayout;
    },
  },
});
</script>
