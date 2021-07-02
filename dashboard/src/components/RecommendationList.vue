<template>
  <div class="recommendation-container">
    <div
      v-for="(item, index) in recommendations"
      :key="index"
      class="recommendation"
    >
      <item :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import ItemsModule from "@/store/modules/ItemsModule";
import { mapGetters } from "vuex";
import Item from "@/components/Dashboard/Item.vue";
import { Entry } from "@/common/Entry";

@Component({
  components: { Item },
  computed: {
    ...mapGetters("ItemsModule", {
      entries: "items",
    }),
  },
})
export default class RecommendationList extends Vue {
  itemsModule: any;
  items: Array<Entry> = [];

  recommendations: Array<Entry> = [];

  @Prop()
  item!: Entry;

  public mounted(): void {
    this.itemsModule = getModule(ItemsModule, this.$store);
    this.items = this.itemsModule.entries;
  }

  @Watch("entries")
  changedItems(): void {
    this.items = this.itemsModule.entries;
  }

  @Watch("item")
  changedItem(): void {
    this.getRecommendations();
  }

  getRecommendations(): void {
    console.log(this.item);
    var categories: Array<Entry> = [];
    this.items.forEach((element) => {
      if (element.Category === this.item.Category) {
        categories.push(element);
      }
    });

    var numberRecommendations = 3;
    this.recommendations = [];
    for (let i = 0; i < numberRecommendations; i++) {
      this.recommendations.push(
        categories[Math.floor(Math.random() * categories.length)]
      );
    }
  }
}
</script>

<style scoped>
.recommendation-container {
  width: 100%;
  display: flex;
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
}

@media (min-width: 600px) {
  .recommendation-container {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
}
@media (min-width: 900px) {
  .recommendation-container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    text-align: center;
  }
}
@media (min-width: 1340px) {
  .recommendation-container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    text-align: center;
  }
}
@media (min-width: 1840px) {
  .recommendation-container {
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }
}
</style>
