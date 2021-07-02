<template>
  <v-parallax
    height="330"
    dark
    src="https://cdn.dribbble.com/users/3958529/screenshots/8515371/iso_4___________________1_4x.png"
    class="parallax"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h4 mb-4">Dashboard</h1>
        <h4 class="subheading">Find your Application Programming Interface</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style scoped>
.parallax {
  width: 100vw;
  height: 200px;
}
.subheading {
  letter-spacing: 2px;
  font-weight: bold;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Parallax extends Vue {}
</script>
