<template>
  <div class="item-list">
    <div v-for="(item, index) in items[currentPage]" :key="index">
      <Item :item="item" :currentPage="currentPage" />
    </div>
  </div>
</template>

<style scoped>
.item-list {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  padding: 20px;
}
@media (min-width: 640px) {
  .item-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (min-width: 900px) {
  .item-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1340px) {
  .item-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1840px) {
  .item-list {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Item from "./Item.vue";
import PaginationModule from "@/store/modules/PaginationModule";
import { getModule } from "vuex-module-decorators";
import { Entry } from "@/common/Entry";
import { mapGetters } from "vuex";

@Component({
  components: {
    Item,
  },
  computed: {
    ...mapGetters("PaginationModule", {
      pagination: "getPagination",
      page: "getCurrentPage",
    }),
  },
})
export default class ItemList extends Vue {
  items = Array<Array<Entry>>(0);
  paginationModule: any;
  currentPage = 0;

  public mounted(): void {
    this.paginationModule = getModule(PaginationModule, this.$store);
  }

  @Watch("pagination")
  updatePagination(): void {
    this.items = this.paginationModule.pagination;
    this.currentPage = this.paginationModule.currentPage;
  }
  @Watch("page")
  updateCurrentPage(): void {
    this.currentPage = this.paginationModule.currentPage;
    console.log(this.currentPage);
  }
}
</script>
