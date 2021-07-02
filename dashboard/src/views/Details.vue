<template>
  <item-details :id="$route.params.id" />
</template>

<script lang="ts">
import Vue from "vue";
import ItemDetails from "@/components/Details/ItemDetails.vue";

export default Vue.extend({
  name: "Details",

  components: {
    ItemDetails,
  },
});
</script>
