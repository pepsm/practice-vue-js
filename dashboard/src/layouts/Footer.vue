<template>
  <v-footer color="primary lighten-1 footer" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        color="white"
        text
        rounded
        :to="link.Path"
        class="my-2"
      >
        {{ link.Name }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Dashboard</strong>
      </v-col>
    </v-row>
    <sitemap @update-links="UpdateLinks" />
  </v-footer>
</template>

<style scoped>
.footer {
  position: fixed !important;
  left: 0;
  bottom: 0 !important;
  width: 100%;
  margin-top: 8vh !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sitemap from "@/components/Dashboard/Sitemap.vue";
import { IRoute, Route } from "@/common/Route";

@Component({
  components: {
    Sitemap,
  },
})
export default class Footer extends Vue {
  links: IRoute[] = [];

  UpdateLinks(e: IRoute[]): void {
    this.links = e;
  }
}
</script>
