<template>
  <v-footer color="primary lighten-2 footer" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        color="white"
        text
        rounded
        :to="link.Path"
        class="my-2 link-btn"
      >
        {{ link.Name }}
      </v-btn>
      <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
        <strong>{{ new Date().getFullYear() }}</strong> © Dashboard
      </v-col>
    </v-row>
    <sitemap @update-links="UpdateLinks" />
  </v-footer>
</template>

<style scoped>
@media (max-width: 400px) {
  .link-btn {
    font-size: 10px;
  }
}
.footer {
  margin-top: 10vh;
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
