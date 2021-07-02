<template>
  <div>
    <v-app-bar fixed color="white">
      <router-link to="/">
        <v-toolbar-title class="brand"
          ><img src="@/assets/brand.jpeg" id="brand-item"
        /></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary right>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item to="/" class="item-list">
            <i class="fas fa-home"></i>
            <v-list-item-title class="item-title"> Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/randomizer" class="item-list">
            <i class="fas fa-dice"></i>
            <v-list-item-title class="item-title">Randomizer</v-list-item-title>
          </v-list-item>
           <v-list-item to="/categories" class="item-list">
            <i class="fas fa-stream"></i>
            <v-list-item-title class="item-title">Categories</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.fa-home,
.fa-stream,
.fa-info,
.fa-dice {
  font-size: 20px;
  width: 40%;
}
.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
#brand-item {
  width: 60px;
}
.item-list {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  drawer = false;
}
</script>
