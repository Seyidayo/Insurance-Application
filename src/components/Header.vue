<template>
  <header class="my-6">
    <h5 class="text-xl font-semibold">Welcome Lois!</h5>
    <p class="text-md text-gray-400">Monday, july 22 2019</p>
    <b-row>
      <b-col v-for="(fact, value, index) in STATISTICS" v-bind:key="index">
        <statistics-card :stat="fact" :description="value" :id="index" />
      </b-col>
    </b-row>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import StatisticsCard from "./StatisticsCard.vue";
export default {
  computed: {
    ...mapGetters(["STATISTICS"])
  },
  components: {
    StatisticsCard
  }
};
</script>