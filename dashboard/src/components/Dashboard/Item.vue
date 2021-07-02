<template>
  <div @click="onClick(item.Id)" class="card-link">
    <v-card class="mx-auto v-card" height="165" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">{{ item.Category }}</div>
          <v-list-item-title class="text-h5 mb-1 item-api"
            >{{ item.API }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.Description }} </v-list-item-subtitle>
          <v-rating
            color="yellow darken-4"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            small
          ></v-rating>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Entry } from "@/common/Entry";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Item extends Vue {
  @Prop()
  item!: Entry;

  onClick(id: number): void {
    if (id != undefined) this.$router.push("/details/" + id);
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.5s;
  width: 344px;
}
.card-link {
  text-decoration: none;
}
.v-card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}
@media (max-width: 600px) {
  .v-card {
    width: 100%;
  }
}
@media (max-width: 900px) {
  .v-card {
    width: 84%;
  }
}

</style>
