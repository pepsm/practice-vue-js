<template>
  <div class="dashboard-container">
    <search />
    <categories />
    <item-list />
    <pagination />
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

@media (max-width: 1400px) {
  .search-container {
    width: 70%;
  }
}
.categories {
  padding-top: 2vh !important;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemList from "./ItemList.vue";
import Pagination from "./Pagination.vue";
import Categories from "../Categories/Categories.vue";
import Search from "./Search.vue";
import ItemsModule from "@/store/modules/ItemsModule";
import { getModule } from "vuex-module-decorators";

@Component({
  components: {
    ItemList,
    Pagination,
    Search,
    Categories,
  },
})
export default class Dashboard extends Vue {
  public mounted(): void {
    const itemsModule = getModule(ItemsModule, this.$store);

    // Fetch items once
    itemsModule.fetchAll();
  }
}
</script>
