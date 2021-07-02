<template>
  <div>
    <parallax/>
    <random-entry></random-entry>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RandomEntry from "@/components/Random/RandomEntry.vue";
import Parallax from '@/components/Parallax.vue'

export default Vue.extend({
  name: "Randomizer",

  components: {
    RandomEntry,
    Parallax
  },

});
</script>
