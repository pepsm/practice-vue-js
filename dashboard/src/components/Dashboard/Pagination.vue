<template>
  <div class="pagination">
    <button class="btn" @click="movePages(-1)">Before</button>
    <span>{{ currentPage + 1 }} out of {{ pagination.length }}</span>
    <button class="btn" @click="movePages(1)">Next</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import ItemsModule from "@/store/modules/ItemsModule";
import PaginationModule from "@/store/modules/PaginationModule";
import { Entry } from "@/common/Entry";
import Item from "./Item.vue";
import { mapGetters } from "vuex";
import { sliceEntries } from "@/common/Slice";

@Component({
  components: {
    Item,
  },
  computed: {
    ...mapGetters("ItemsModule", {
      entries: "items",
    }),
  },
})
export default class Pagination extends Vue {
  items: Array<Entry> = [];
  rowsPerPage = 10;
  pagination = Array<Array<Entry>>();
  currentPage = 0;
  itemsModule: any;
  paginationModule: any;

  public mounted(): void {
    this.itemsModule = getModule(ItemsModule, this.$store);
    this.paginationModule = getModule(PaginationModule, this.$store);
  }

  @Watch("entries")
  changedItems(): void {
    this.items = this.itemsModule.entries;
    this.pagination = sliceEntries(this.items, this.rowsPerPage);
    this.paginationModule.updatePagination(this.pagination);
  }

  movePages(amount: number): void {
    var newPage = this.currentPage + amount;
    if (newPage >= 0 && newPage < this.pagination.length) {
      this.currentPage += amount;
      this.paginationModule.updateCurrentPage(this.currentPage);
    }
  }
}
</script>

<style scoped>
.pagination {
  display: inline-block;
  margin-top: 4vh;
  margin-bottom: 4vh;
}
.pagination span {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}
.pagination .btn {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  margin-left: 10px;
  margin-right: 10px;
  transition: all 0.3s;
}
.pagination .btn:hover {
  background-color: #787be0;
  color: white;
  border: 1px solid #787be0;
}
</style>
