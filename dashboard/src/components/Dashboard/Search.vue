<template>
  <div class="search-container">
    <v-text-field v-model="searchQuery">
      <template v-slot:prepend>
        <v-icon> mdi-magnify</v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import ItemsModule from "@/store/modules/ItemsModule";
import PaginationModule from "@/store/modules/PaginationModule";
import { Entry } from "@/common/Entry";
import { mapGetters } from "vuex";
import { sliceEntries } from "@/common/Slice";

@Component({
  components: {},
  computed: {
    ...mapGetters("ItemsModule", {
      entries: "items",
    }),
  },
})
export default class Search extends Vue {
  searchQuery = "";
  items: Array<Entry> = [];
  rowsPerPage = 10;
  paginationModule: any;

  public mounted(): void {
    this.paginationModule = getModule(PaginationModule, this.$store);
  }

  @Watch("searchQuery")
  changedQuery(): void {
    // Search Query
    const searchableWord = this.searchQuery;

    // Filter the items collection
    var result = this.items.filter(function (e) {
      return e.API.includes(searchableWord);
    });
    // Set the pagination
    var pagination = sliceEntries(result, this.rowsPerPage);
    this.paginationModule.updatePagination(pagination);
  }

  @Watch("entries")
  changedItems(): void {
    this.items = getModule(ItemsModule, this.$store).entries;
  }
}
</script>

<style scoped>
.search-container {
  margin-top: 5vh;
  width: 50%;
}
</style>
