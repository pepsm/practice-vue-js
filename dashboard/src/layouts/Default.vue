<template>
  <v-app>
    <!-- Must have the app property -->
    <Navbar />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class Default extends Vue {}
</script>
