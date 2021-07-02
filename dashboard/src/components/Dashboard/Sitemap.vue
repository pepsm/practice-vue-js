<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IRoute, Route } from "@/common/Route";

@Component
export default class Sitemap extends Vue {
  links: IRoute[] = [];

  mounted(): void {
    var routes = this.$router.getRoutes();
    routes.forEach((route) => {
      var path = route.path.replace(":id", "0");
      if (route.name == "Home") route.path = "/";
      console.log(route.path)
      this.links.push(new Route(route.name, path));
    });
    this.$emit("update-links", this.links);
  }
}
</script>
