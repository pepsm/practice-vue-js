<template>
  <div class="randomizer-container">
    <h1>Randomizer</h1>
   
    <v-btn class="button" @click="()=>{this.randomModule.fetchRandom()}">Get Random</v-btn>
    <item :item="item"/>
  </div>
</template>

<style scoped>
.randomizer-container{
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.randomizer-container h1{
  margin-bottom: 4vh;
}
.button{
  background: #7771dc !important;
  color: white;
  margin-bottom: 1vh;
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import RandomModule from "@/store/modules/RandomModule";
import { getModule } from "vuex-module-decorators";
import { Entry } from "@/common/Entry";
import { mapGetters } from "vuex";
import Item from "@/components/Dashboard/Item.vue";

@Component({
  components: {
    Item
  },
  computed: {
    ...mapGetters("RandomModule", {
      random: "getRandom",
    }),
  },
})
export default class Dashboard extends Vue {
  randomModule: any;
  item: Entry = new Entry(0,"", "", "", "", false, "", "");

  public mounted(): void {
    this.randomModule = getModule(RandomModule, this.$store);
    // Do stuff with module
    this.randomModule.fetchRandom()
  }

  @Watch("random")
  updateRandomEntry(): void {
    this.item = this.randomModule.entries[0];
  }
}
</script>
