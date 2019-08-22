<template>
  <header class="my-3">
    <h4 class="demi-font leading-none">Welcome, Lois!</h4>
    <p class="text-sm faded-gray font-semibold leading-none">{{todaysDate}}</p>

    <b-row v-if="STATISTICS !== undefined">
      <b-col md="3" v-for="(fact, index) in STATISTICS" v-bind:key="index">
        <statistics-card :stat="fact" :id="index" />
      </b-col>
    </b-row>
    <b-card v-else>
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
  data() {
    return {
      todaysDate: new Date().toLocaleDateString("en-NG", {
        year: "numeric",
        weekday: "long",
        month: "long",
        day: "numeric"
      })
    };
  },
  mounted() {
    thereIsSomething: {
      console.log("mounted");
      console.log(typeof STATISTICS);
      return true;
    }
  },
  computed: {
    ...mapGetters(["STATISTICS"])
  },
  components: {
    StatisticsCard,
    EmptyPlaceholder
  },
  methods: {
    refresh() {
      this.$store.dispatch("SET_STATISTICS");
    }
  }
};
</script>