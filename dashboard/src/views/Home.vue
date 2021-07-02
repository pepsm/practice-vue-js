<template>
  <div>
    <parallax />
    <dashboard></dashboard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import Parallax from "@/components/Parallax.vue"
export default Vue.extend({
  name: "Home",

  components: {
    Dashboard,
    Parallax,
  },
});
</script>
