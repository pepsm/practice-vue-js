<template>
  <v-row justify="space-around" class="categories">
    <v-col cols="categories.length" sm="10" md="8">
      <v-sheet elevation="10" class="py-4 px-1">
        <v-chip-group mandatory active-class="primary--text">
          <v-chip
            v-for="category in categories"
            :key="category"
            @click="onClick(category)"
          >
            {{ category }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Watch} from "vue-property-decorator";
import CategoriesModule from "@/store/modules/CategoriesModules";
import { getModule } from "vuex-module-decorators";
import { mapGetters } from "vuex";
import ItemsModule from "@/store/modules/ItemsModule";
import { Entry } from "@/common/Entry";

import { sliceEntries } from "@/common/Slice";
import PaginationModule from "@/store/modules/PaginationModule";

@Component({
  components: {},
  computed: {
    ...mapGetters("ItemsModule", {
      entries: "items",
    }),
  },
})
export default class Categories extends Vue {
  categoriesModule: any;
  categories: Array<string> = [];
  items: Array<Entry> = [];
  paginationModule: any;
  rowsPerPage = 10;

  mounted(): void {
    this.categoriesModule = getModule(CategoriesModule, this.$store);
    this.categoriesModule.fetchCategories().then(() => {
      this.categories = this.categoriesModule.categories;
    });
     this.paginationModule = getModule(PaginationModule, this.$store);
  }

   
  onClick(category: string): void {

     var result = this.items.filter(function (e) {
      return e.Category.includes(category);
    });
    console.log(this.items)
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

<style>
.categories {
  padding-top: 10vh;
  width: 100%;
  display: none;
}
</style>