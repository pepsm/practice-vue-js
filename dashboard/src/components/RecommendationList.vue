<template>
  <div>
    <h1 class="recommendation-title">Recommendations:</h1>

    <div class="recommendation-container">
      <div
        v-for="(item, index) in recommendations"
        :key="index"
        class="recommendation"
      >
        <item :item="item" />
      </div>
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
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
}
.recommendation {
  margin-left: 30px;
}
.recommendation-title {
  color: white;
  z-index: 2;
  background: cadetblue;
}

@media (min-width: 600px) {
  .recommendation-container {
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
  }
}
</style>
