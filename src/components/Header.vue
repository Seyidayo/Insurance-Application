<template>
  <header class="my-2">
    <h4 class="font-bold leading-none">Welcome, Lois!</h4>
    <p class="text-sm faded-gray font-semibold leading-none">Monday, July 22, 2019.</p>
    <b-row v-if="STATISTICS != undefined || STATISTICS.length > 0">
      <b-col md="3" v-for="(fact, index) in STATISTICS" v-bind:key="index">
        <statistics-card :stat="fact" :id="index" />
      </b-col>
    </b-row>
    <b-card v-else class="shadow-sm">
      <EmptyPlaceholder :refresh="refresh"></EmptyPlaceholder>
    </b-card>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import StatisticsCard from "@/components/StatisticsCard.vue";
import EmptyPlaceholder from "@/components/EmptyPlaceholder";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["STATISTICS"])
  },
  components: {
    StatisticsCard,
    EmptyPlaceholder
  }
};
</script>