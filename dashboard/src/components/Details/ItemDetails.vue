<template>
  <div class="container">
    <div class="container-item">
      <img
        src="https://i.pinimg.com/originals/b9/c8/f8/b9c8f893c9a782033a01f47e0c0b1d6e.jpg"
        class="img-details"
      />
      
      <v-card class="mx-auto v-card" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">{{ item.Category }}</div>
            <v-list-item-title class="text-h5 mb-1"
              ><span><i class="fas fa-database"></i></span>{{ item.API }}
            </v-list-item-title>
            <div class="description">
              {{ item.Description }}
              <div class="item-description">
                <span>CORS: </span>{{ item.Cors }}
              </div>
              <div class="item-description">
                <span>Https: </span>{{ item.Https }}
              </div>
              <span><i class="fas fa-link"></i></span>
              <a :href="item.Link">{{ item.Link }}</a>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <button></button>
        </v-card-actions>
      </v-card>

    </div>
    
    <recommendation-list :item="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import ItemsModule from "@/store/modules/ItemsModule";
import RecommendationList from "@/components/RecommendationList.vue";
import Item from "../Dashboard/Item.vue";
import { mapGetters } from "vuex";
import { Entry } from "@/common/Entry";

@Component({
  components: {
    Item,
    RecommendationList,
  },
  computed: {
    ...mapGetters("ItemsModule", {
      entries: "items",
    }),
  },
})
export default class ItemDetails extends Vue {
  @Prop()
  id!: number;

  itemsModule: any;
  item: Entry = new Entry(0, "", "", "", "", false, "", "");
  items: Array<Entry> = [];

  public mounted(): void {
    this.itemsModule = getModule(ItemsModule, this.$store);
    this.items = this.itemsModule.entries;

    // Checks if Items has been fetched and sets the current item
    if (this.items.length == 0) {
      this.itemsModule.fetchAll();
    } else {
      this.item = this.items[this.id];
    }
  }

  @Watch("id")
  updateId(){
    this.item = this.items[this.id];
  }
  
  @Watch("entries")
  changedItems(): void {
    this.items = this.itemsModule.entries;
    this.item = this.items[this.id];
  }
}
</script>

<style scoped>
.v-card {
  height: 220px;
  width: 544px;
}
.item-description {
  margin-top: 2px;
  margin-bottom: 2px;
}
.description {
  margin-top: 20px;
}
.fa-database {
  font-size: 20px;
  margin-right: 10px;
}
.container {
  width: 100vw;
  margin-top: 10vh;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img-details {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
}
.container-item {
  width: 100%;
}
</style>
