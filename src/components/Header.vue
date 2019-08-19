<template>
  <header class="my-6">
    <h5 class="font-semibold">Welcome Lois!</h5>
    <p class="text-md faded-gray">Monday, July 22 2019</p>
    <b-row v-if="STATISTICS != undefined">
      <b-col v-for="(fact, index) in STATISTICS" v-bind:key="index">
        <statistics-card :stat="fact" :id="index" />
      </b-col>
    </b-row>
    <b-card v-else class="shadow-md">
      <EmptyPlaceholder :refresh="refresh"></EmptyPlaceholder>
    </b-card>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import StatisticsCard from "@/components/StatisticsCard.vue";
import EmptyPlaceholder from "@/components/EmptyPlaceholder";
export default {
  computed: {
    ...mapGetters(["STATISTICS"])
  },
  components: {
    StatisticsCard,
    EmptyPlaceholder
  }
};
</script>